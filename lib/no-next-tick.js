module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Using $nextTick from a component instance is discouraged. Import nextTick from the Vue package.",
    },
    schema: [], // no options
  },
  create: function (context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type !== "ThisExpression" &&
          node.property.name === "$nextTick"
        ) {
          context.report({
            node,
            message:
              "Using $nextTick from a component instance is discouraged. Import nextTick from the Vue package.",
          });
        }
      },
    };
  },
};
