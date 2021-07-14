"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  me: async (ctx) => {
    const { user } = ctx.state;

    if (!user) {
      return ctx.badRequest("fail", [
        { messages: [{ id: "No authorization header found" }] },
      ]);
    }

    const data = await strapi.services.events.find({ user: user.id });

    if (!data) {
      return ctx.notFound(fail, [{ messages: [{ id: "No Events Found" }] }]);
    }

    return sanitizeEntity(data, { model: strapi.models.events });
  },
};
