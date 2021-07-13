const path = require("path");
const math = require("mathjs");

const getPluginItem = ({ inputStr }) => {
  let items = [];
  if (!inputStr) return { items };

  try {
    const result = String(math.evaluate(inputStr));

    items.push({
      title: result,
      subtitle: inputStr != result ? `${inputStr} = ${result}` : inputStr,
      icon: {
        path: `${__dirname}${path.sep}icon.png`,
      },
    });
  } catch (err) {
    // If inputStr is not proper numerical expression, catchs err.
    // Return an empty array to 'items' if you do not need to include this plugin's items.
  }

  return {
    items,
  };
};

// Export a function that has inputStr as a argument.
module.exports = getPluginItem;