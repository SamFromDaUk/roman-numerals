import RomanNumeral from '../class/RomanNumeral';

export default async (ctx) => {
  const input = Number(ctx.query.number);

  ctx.status = 400;

  if (!ctx.query.number) {
    ctx.body = { error: 'Query parameter "number" expected' };

    return;
  }

  if (Number.isNaN(input)) {
    ctx.body = { error: 'Query parameter "number" expected to be of type number' };

    return;
  }

  if (input < 1 || input >= 4000) {
    ctx.body = { error: 'Query parameter "number" is out of bounds. Expected > 0 and < 4000' };

    return;
  }

  try {
    const numeral = new RomanNumeral({ number: input });

    ctx.status = 200;
    ctx.body = {
      input,
      output: numeral.getValue(),
    };
  } catch (e) {
    ctx.status = 500;
    ctx.body = { error: e.message };
  }
};
