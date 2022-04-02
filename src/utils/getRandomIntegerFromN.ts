export const getRandomIntegerFromNexceptX = (
  max: number,
  except?: number,
): number => {
  let i = 0;

  const returner = (max: number, except?: number): number => {
    i++;
    if (i > 10) {
      // in case when max and except are equal we will have overflowed stack. So I added this condition to prevent it
      return 0;
    }

    const number = Math.floor(Math.random() * max);

    return number !== except ? number : returner(max, except);
  };

  return returner(max, except);
};
