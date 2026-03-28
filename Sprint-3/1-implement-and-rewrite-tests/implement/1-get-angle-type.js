function getAngleType(angle) {
  if (angle === 90) {
    return "Right angle";
  } else if (angle < 90 && angle > 0) {
    return "Acute angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}

module.exports = getAngleType;
