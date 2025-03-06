import Bowser from "bowser";

        export function isHandheld(){

            const browser = Bowser.getParser(window.navigator.userAgent);
            const isHandheld = browser.getPlatformType() === 'tablet' || browser.getPlatformType() === 'mobile';

            return isHandheld;
        }
      