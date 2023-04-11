document.addEventListener('DOMContentLoaded', () => {
  $("#register").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    }
  });

  $("#login").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    }
  });

  $("#recovery").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });

  $("#gift-form").validate({
    rules: {
      price: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
      },
      phone: {
        required: true,
        digits: true
      },
      amount: {
        required: true,
        digits: true
      },
      text: {
        required: true,
      },
    }
  });

  $("#card-form").validate({
    rules: {
      number: {
        required: true,
      }
    }
  });

  $("#cabinet-form").validate({
    rules: {
      name: {
        required: true,
      },
      lastname: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
      },
      date: {
        required: true,
        date: true
      },
      oldpass: {
        required: true,
        minlength: 6
      },
      newpass: {
        required: true,
        minlength: 6
      },
      repass: {
        required: true,
        minlength: 6
      }
    }
  });

  $("#book-form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
      },
      text: {
        required: true,
      },
      date: {
        required: true,
      },
    }
  });


  $(".add-amount").click(function () {
    $(".amount-input").removeAttr("disabled");
    $(".amount-input").focus();
    $(".check-items input").prop('checked', false);
  });


  $(".check-items label").click(function () {
    $(".amount-input").attr('disabled', true);
    $(".check-amount").prop('checked', false);
    $(".amount-field label.error").remove();
  });


  $(function () {
    $("#datepicker").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: "dd.mm.yy",
      minDate: 0,
    });
  });


  $("#datepicker").change(function () {
    var date = $(this).val();
    $(".info-date span").text(date);
  })



  $('.plus').click(function (e) {
    e.preventDefault();
    if ($(this).prev().val() < 5) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
    var number = $(".add-person input").val();
    $(".number span").text(number);
  });

  $('.minus').click(function (e) {
    e.preventDefault();
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
    var number = $(".add-person input").val();
    $(".number span").text(number);
  });

  $(".program-item").click(function () {
    $(".program-item").removeClass("active");
    $(this).addClass("active");
    $(".time-wrap").hide(300);
    $(".select-time").hide(300);
    $(".book-order").hide(300);
    $(".info-text").show(300);
    $(".time-item").removeClass("active");

    var namep = $(this).children("span").text();
    var pricep = $(this).data("price");

    $(".program-wrap").html(`<div class="program-name">` + namep + `: <span>€ <span class="s-price">` + pricep + `</span></span> </div>`);
    totalPrice();
  });

  $(".program4").click(function () {
    $(".time-wrap").show(300);
  });

  $(".s-place").click(function (e) {
    e.preventDefault();
    if ($("#datepicker").val().length > 0) {
      $(".select-time").show(300);
      $(".info-text").hide(300);
    }
    else {
      $("#datepicker").datepicker('show');
    }
  });

  $(".time-item").click(function () {
    if (!$(this).hasClass("disabled")) {
      $(".time-item").removeClass("active");
      $(this).addClass("active");
      $(".book-order").show(300);

      var time = $(this).text();
      $(".time span").text(time);
    }

    var namep = $(".program-item.active").children("span").text();
    var pricep = $(".program-item.active").attr("data-price");

    $(".program-wrap").html(`<div class="program-name">` + namep + `: <span>€ <span class="s-price">` + pricep + `</span></span> </div>`);
    totalPrice();
  });

  $(".check-list label").click(function () {
    var id = $(this).data("services");
    $("." + id).toggleClass("active");
    totalPrice();
  });


  function totalPrice() {
    var serPrice = parseInt($(".s-price").text());

    var addPrice = 0;
    $(".add-serv.active .s-add").each(function () {
      addPrice += parseInt($(this).html());
    });


    var tPrice = serPrice + addPrice;

    $(".book-price span").text("€ " + tPrice);

  }

  $(".time-block label").click(function () {
    var mPrice = parseInt($(".program4").data("price"));
    var pTime = parseInt($(this).data("time"));
    var fPrice = mPrice * pTime;
    $(".program4").attr("data-price", fPrice);
    $(".select-time").hide(300);
    $(".book-order").hide(300);
    $(".time-item").removeClass("active");
  });

  $('.date-mask').mask('00.00.0000', { placeholder: "__.__.____" });

  $(".amount-input").mask('000000');


});