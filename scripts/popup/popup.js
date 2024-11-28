/**
 * @module Popup
 */
import { PopupController } from './controllers/PopupController.js';

/**
 * Initializes the PopupController once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  /**
   * @type {PopupController}
   */
  new PopupController();
});
