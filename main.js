var numList = [];

function getEle(id) {
  return document.getElementById(id);
}

function Show(id) {
  document.getElementById(id).style.display = "inline-block";
}

/**
 * Thêm số vào mảng
 */
getEle("btnAddNum").addEventListener("click", function () {
  var number = getEle("txtNumber").value * 1;

  if (Math.ceil(number) === Math.floor(number)) {
    numList.push(number);
  } else {
    alert(number + " Không phải là số nguyên. Vui lòng nhập lại số khác!");
  }

  getEle("footerPrintNum").innerHTML = "- Dãy số: " + numList;

  // Show
  Show("btnTotal");
  Show("btnCount");
  Show("btnMin");
  Show("btnMinPositiveNumber");
  Show("btnEvenNumer");
  Show("title_1");
  Show("txtPosition_1");
  Show("title_2");
  Show("txtPosition_2");
  Show("btnChangePositionNumber");
  Show("btnAscending");
  Show("btnPrimeNumber");
  Show("btnCompare");
});

/**
 * 1. Tổng các số dương trong mảng.
 */
getEle("btnTotal").addEventListener("click", function () {
  var total = 0;
  for (var i = 0; i < numList.length; i++) {
    total += numList[i];
  }
  getEle("footerTotal").innerHTML = "- Tổng là: " + total;
});

/**
 * 2. Đếm có bao nhiêu số dương trong mảng.
 */
getEle("btnCount").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] >= 0) {
      count++;
    }
  }
  getEle("footerCount").innerHTML = "- Có " + count + " số dương";
});

/**
 * 3. Tìm số nhỏ nhất trong mảng.
 */
getEle("btnMin").addEventListener("click", function () {
  var min = numList[0];
  for (var i = 1; i < numList.length; i++) {
    if (min > numList[i]) {
      min = numList[i];
    }
  }
  getEle("footerMin").innerHTML = "- Số nhỏ nhất là: " + min;
});

/**
 * 4. Tìm số dương nhỏ nhất trong mảng.
 */
getEle("btnMinPositiveNumber").addEventListener("click", function () {
  var positiveNumList = [];
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] >= 0) {
      positiveNumList.push(numList[i]);
    }
  }
  var positiveMin = positiveNumList[0];
  for (var j = 1; j < positiveNumList.length; j++) {
    if (positiveMin > positiveNumList[j]) {
      positiveMin = positiveNumList[j];
    }
  }

  getEle("footerMinPositiveNumber").innerHTML =
    "- Số dương nhỏ nhất là: " + positiveMin;
});

/**
 * 5. Tìm số chẵn cuối cùng trong mảng.
 */
getEle("btnEvenNumer").addEventListener("click", function () {
  var evenNum = "";
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] % 2 === 0) {
      evenNum = "- Số chẵn cuối cùng trong dãy số là: " + numList[i];
    } else {
      evenNum = -1;
    }
  }
  getEle("footerEvenNumber").innerHTML = evenNum;
});

/**
 * 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
 */
getEle("btnChangePositionNumber").addEventListener("click", function () {
  var x = getEle("txtPosition_1").value * 1;
  var y = getEle("txtPosition_2").value * 1;

  var temp;
  temp = numList[x - 1];
  numList[x - 1] = numList[y - 1];
  numList[y - 1] = temp;
  getEle("footerChangePositionNumber").innerHTML =
    "- Dãy số sau khi đã đổi chỗ: " + numList;
});

/**
 * 7. Sắp xếp mảng theo thứ tự tăng dần.
 */
getEle("btnAscending").addEventListener("click", function () {
  var temp;
  for (var i = 0; i < numList.length - 1; i++) {
    for (var j = i + 1; j < numList.length; j++) {
      if (numList[i] > numList[j]) {
        temp = numList[i];
        numList[i] = numList[j];
        numList[j] = temp;
      }
    }
  }
  getEle("footerAscending").innerHTML = "- Sắp xếp tăng dần: " + numList;
});

/**
 * 8. Tìm số nguyên tố đầu tiên trong mảng.
 */
getEle("btnPrimeNumber").addEventListener("click", function () {
  var primeNum;
  var primeNumList = [];
  var result;
  for (var i = 0; i < numList.length; i++) {
    var count = 0;
    for (j = 1; j <= numList[i]; j++) {
      if (numList[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      primeNum = numList[i];
      primeNumList.push(primeNum);
      result = "- Số nguyên tố đầu tiên là: " + primeNumList[0];
    }
  }
  if (primeNumList == "") {
    result = -1;
  }
  getEle("footerPrimeNumber").innerHTML = result;
});

/**
 * 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */
getEle("btnCompare").addEventListener("click", function () {
  var positiveNum = 0;
  var negativeNum = 0;
  var result;
  var content;
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] >= 0) {
      positiveNum++;
    } else if (numList[i] < 0) {
      negativeNum++;
    }
  }
  if (positiveNum > negativeNum) {
    result = "số dương nhiều hơn số âm";
  } else if (positiveNum === negativeNum) {
    result = "cả 2 bằng nhau";
  } else if (positiveNum < negativeNum) {
    result = "số âm nhiều hơn số dương";
  }
  content =
    "- Có " +
    positiveNum +
    " số dương và " +
    negativeNum +
    " số âm. Nên " +
    result;
  getEle("footerCompare").innerHTML = content;
});

/**
 * 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */
var RealNumberList = [];
getEle("btnAddRealNum").addEventListener("click", function () {
  var number = getEle("txtCountInt").value * 1;
  RealNumberList.push(number);
  getEle("footerRealNumberList").innerHTML = "- Dãy số: " + RealNumberList;

  // Bat nut dem
  getEle("btnCountInt").style.display = "inline-block";
});

getEle("btnCountInt").addEventListener("click", function () {
  var count = 0;
  var content = "";
  // Dem so nguyen
  for (var i = 0; i < RealNumberList.length; i++) {
    if (Math.ceil(RealNumberList[i]) === Math.floor(RealNumberList[i])) {
      count++;
      content = "- Có " + count + " số nguyên";
    }
  }
  if (count === 0) {
    content = "- Không có số nguyên nào";
  }
  getEle("footerCountInt").innerHTML = content;
});
