function changeYearColor() {
    const yearElement = document.getElementById('year');
    setInterval(() => {
        yearElement.style.color = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    }, 1000);
  }
  
  function changeDateTimeBackgroundColor() {
    const dateTimeElement = document.getElementById('date-time');
    setInterval(() => {
        dateTimeElement.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    }, 1000);
  }
  
  function randomColorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    setInterval(() => {
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }, 1000);
  }
  
  function setChallengeBackgrounds() {
    const completedChallenges = document.querySelectorAll('.completed');
    completedChallenges.forEach((challenge) => {
        challenge.style.backgroundColor = 'green';
    });
  
    const ongoingChallenges = document.querySelectorAll('.ongoing');
    ongoingChallenges.forEach((challenge) => {
        challenge.style.backgroundColor = 'yellow';
    });
  
    const comingChallenges = document.querySelectorAll('.coming');
    comingChallenges.forEach((challenge) => {
        challenge.style.backgroundColor = 'red';
    });
  }
  
  changeYearColor();
  changeDateTimeBackgroundColor();
  displayDateTime();
  setChallengeBackgrounds();