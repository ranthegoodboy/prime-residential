export function isEven(num) {
  return num % 2 == 0;
}

// Filter/Search utils ---START
export function filterFittings(categorizedFittings, keyword) {
  if (keyword === "" || !keyword) return categorizedFittings;
  if (keyword !== "") {
    return categorizedFittings.filter((fitting) => {
      if (
        strMatch(fitting.category, keyword) ||
        strMatchFittings(fitting.fittings, keyword)
      ) {
        return fitting;
      }
    });
  }
}

function strMatchFittings(fittings, keyword) {
  let result;
  if (fittings.length === 0) return false;

  fittings.forEach((fitting) => {
    if (
      strMatch(fitting.primeProducts.partNumber, keyword) ||
      strMatch(fitting.title, keyword)
    ) {
      result = true;
      return;
    }
  });
  return result;
}

function strMatch(str, keyword) {
  return str.toLowerCase().includes(keyword.toLowerCase());
}
// Filter/Search utils ---END

// Credit Application Form helpers --START
export function getActiveStep(obj) {
  const active = Object.keys(obj).filter((key) => obj[key].active === true);
  return active[0] || 1;
}

export function setActiveStep(obj, step) {
  Object.keys(obj).forEach((item) => {
    item === step ? (obj[item].active = true) : (obj[item].active = false);
  });
  return obj;
}

export function isFirstStepActive(obj) {
  const stepsMap = Object.keys(obj).map((key) => key);
  return stepsMap.indexOf(getActiveStep(obj)) === 0;
}

export function isLastStepActive(obj) {
  const stepsMap = Object.keys(obj).map((key) => key);
  return stepsMap.indexOf(getActiveStep(obj)) === stepsMap.length - 1;
}

export function goToNextStep(obj) {
  const stepsMap = Object.keys(obj).map((key) => key);
  const nextStep = stepsMap.indexOf(getActiveStep(obj)) + 1;
  if (nextStep + 1 > stepsMap.length) return obj;
  setActiveStep(obj, stepsMap[nextStep]);
  return obj;
}

export function goToPrevStep(obj) {
  const stepsMap = Object.keys(obj).map((key) => key);
  const prevStep = stepsMap.indexOf(getActiveStep(obj)) - 1;
  if (prevStep < 0) return obj;
  setActiveStep(obj, stepsMap[prevStep]);
  return obj;
}

export function getActiveStepFields(obj) {
  const activeStep = getActiveStep(obj);
  return obj[activeStep].fields;
}
// Credit Application Form helpers --END
