import { BLOCK_PAGE_ENABLED, LIST_ITEM_SIZE } from "./constants.js";
import { requestGateway } from "./helpers.js";

/**
 * Gets Zero Trust lists.
 *
 * API docs: https://developers.cloudflare.com/api/operations/zero-trust-lists-list-zero-trust-lists
 * @returns {Promise<Object>}
 */
export const getZeroTrustLists = () =>
  requestGateway("/lists", {
    method: "GET",
  });

/**
 * Creates a Zero Trust list.
 *
 * API docs: https://developers.cloudflare.com/api/operations/zero-trust-lists-create-zero-trust-list
 * @param {string} name The name of the list.
 * @param {Object[]} items The domains in the list.
 * @param {string} items[].value The domain of an entry.
 * @returns {Promise}
 */
const createZeroTrustList = (name, items) =>
  requestGateway(`/lists`, {
    method: "POST",
