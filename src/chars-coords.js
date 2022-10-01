const characters = {
  stewie: {
    x:
        {
          start: 1210,
          end: 1280,
        },
    y:
         {
           start: 628,
           end: 708,
         },
  },

  antman: {
    x:
          {
            start: 490,
            end: 555,
          },
    y:
           {
             start: 1236,
             end: 1308,
           },
  },

  judgedredd: {
    x:
            {
              start: 852,
              end: 923,
            },
    y:
             {
               start: 1068,
               end: 1250,
             },
  },
};

const example = { name: "stewie", coordinates: { x: 1220, y: 650 } };

const validateCoordinates = (selected, data) =>
{
  const { name, coordinates } = selected;

  return !!(((
    data[name].x.start <= coordinates.x && data[name].x.end >= coordinates.x
  )
  && (
    data[name].y.start <= coordinates.x && data[name].y.end >= coordinates.x
  )));
};
