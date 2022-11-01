const inputNumber = document.querySelector('.js-input');
const btnNumber = document.querySelector('.js-button');
const paragraphNumber = document.querySelector('.js-paragraph');

class EmptyInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyInputError";
  }
}

class NotNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotNumberError";
  }
}

class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "OutOfRangeError";
  }
}

function validateInput(numberValue) {
  try {
    if (inputNumber.value === '') {
      throw new EmptyInputError('Поле пустое, введите значение');
    }
    if (isNaN(+numberValue)) {
      throw new NotNumberError('Введите число');
    }
    if (+numberValue < 5 || +numberValue > 10) {
      throw new OutOfRangeError('Введите число в диапазоне от 5 до 10');
    }

    paragraphNumber.innerHTML = numberValue;

  } catch(e) {
    throw e;
  }
}

btnNumber.addEventListener('click', function(evt) {
  evt.preventDefault();
  try {
    validateInput(inputNumber.value)
  } catch(e) {
    console.log(e.name);
    paragraphNumber.innerHTML = `${e.message}`;
  }
})