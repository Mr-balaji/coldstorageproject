import React, { Component } from 'react';
import $ from 'jquery'; // Import jQuery

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      diff: 0,
      curSlide: 0,
      numOfSlides: 0, // Set this to the correct number of slides
      animating: false,
      animTime: 500,
      autoSlideTimeout: null,
      autoSlideDelay: 6000,
    };
  }

  componentDidMount() {
    this.setState({
      numOfSlides: $(".slide").length - 1,
    });
    this.createBullets();
    this.autoSlide();

    // Add event listeners
    $(document).on("mousedown touchstart", ".slider", this.handleMouseDown);
    $(document).on("mouseup touchend", this.handleMouseUp);
    $(document).on("click", ".slider-control", this.handleControlClick);
    $(document).on("click", ".slider-pagi__elem", this.handlePagiElemClick);
  }

  componentWillUnmount() {
    // Clean up event listeners to prevent memory leaks
    $(document).off("mousedown touchstart", ".slider", this.handleMouseDown);
    $(document).off("mouseup touchend", this.handleMouseUp);
    $(document).off("click", ".slider-control", this.handleControlClick);
    $(document).off("click", ".slider-pagi__elem", this.handlePagiElemClick);
  }

  createBullets() {
    const { numOfSlides } = this.state;
    const $pagination = $(".slider-pagi");
    for (let i = 0; i < numOfSlides + 1; i++) {
      const $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  }

  manageControls() {
    $(".slider-control").removeClass("inactive");
    const { curSlide, numOfSlides } = this.state;
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  }

  autoSlide() {
    const { autoSlideDelay } = this.state;
    this.autoSlideTimeout = setTimeout(() => {
      this.setState(
        (prevState) => ({ curSlide: (prevState.curSlide + 1) % (prevState.numOfSlides + 1) }),
        () => this.changeSlides()
      );
    }, autoSlideDelay);
  }

  changeSlides(instant = false) {
    this.setState({ animating: true }, () => {
      this.manageControls();
      const { animTime, curSlide } = this.state;

      $(".slider").addClass("animating");
      $(".slider").css("top", "");
      $(".slide").removeClass("active");
      $(".slide-" + curSlide).addClass("active");

      setTimeout(() => {
        $(".slider").removeClass("animating");
        this.setState({ animating: false });
      }, animTime);

      window.clearTimeout(this.autoSlideTimeout);
      $(".slider-pagi__elem").removeClass("active");
      $(".slider-pagi__elem-" + curSlide).addClass("active");
      $(".slider").css("transform", `translate3d(${-curSlide * 100}%,0,0)`);
      $(".slide__bg").css("transform", `translate3d(${curSlide * 50}%,0,0)`);
      this.setState({ diff: 0 }, () => this.autoSlide());
    });
  }

  navigateLeft() {
    const { animating, curSlide } = this.state;
    if (!animating && curSlide > 0) {
      this.setState(
        (prevState) => ({ curSlide: prevState.curSlide - 1 }),
        () => this.changeSlides()
      );
    }
  }

  navigateRight() {
    const { animating, curSlide, numOfSlides } = this.state;
    if (!animating && curSlide < numOfSlides) {
      this.setState(
        (prevState) => ({ curSlide: prevState.curSlide + 1 }),
        () => this.changeSlides()
      );
    }
  }

  handleMouseDown = (e) => {
    const { animating, curSlide, numOfSlides } = this.state;
    if (animating) return;

    window.clearTimeout(this.autoSlideTimeout);
    const startX = e.pageX || e.originalEvent.touches[0].pageX;
    const winW = $(window).width();
    this.setState({ diff: 0 });

    $(document).on("mousemove touchmove", this.handleMouseMove(startX, winW, curSlide, numOfSlides));
  };

  handleMouseMove = (startX, winW, curSlide, numOfSlides) => (e) => {
    if (this.state.animating) return;
    const x = e.pageX || e.originalEvent.touches[0].pageX;
    let { diff } = this.state;
    diff = (startX - x) / winW * 70;
    if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
    $(".slider").css("transform", `translate3d(${-curSlide * 100 - diff}%,0,0)`);
    $(".slide__bg").css("transform", `translate3d(${curSlide * 50 + diff / 2}%,0,0)`);
    this.setState({ diff });
  };

  handleMouseUp = () => {
    $(document).off("mousemove touchmove");
    if (this.state.animating) return;
    const { diff } = this.state;

    if (!diff) {
      this.changeSlides(true);
      return;
    }

    if (diff > -8 && diff < 8) {
      this.changeSlides();
      return;
    }

    if (diff <= -8) {
      this.navigateLeft();
    }

    if (diff >= 8) {
      this.navigateRight();
    }
  };

  handleControlClick = () => {
    if ($(this).hasClass("left")) {
      this.navigateLeft();
    } else {
      this.navigateRight();
    }
  };

  handlePagiElemClick = () => {
    // Handle pagination element click to change slides
  };

  render() {
    return <div className="slider">{/* Your HTML content goes here */}</div>;
  }
}

export default Slider;
