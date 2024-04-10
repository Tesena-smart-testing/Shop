class WelcomeScreenObject {
  getElementByResourceId(resourceId) {
    return $(`android=new UiSelector().resourceId("${resourceId}")`);
  }

  get skipAndContinueBtn() {
    return this.getElementByResourceId("IntroLoginSkipButton");
  }

  async clickOnSkipBtn() {
    const isSkipBtnDisplayed = await this.skipAndContinueBtn.isDisplayed();
    if (isSkipBtnDisplayed) {
      await this.skipAndContinueBtn.click();
    }
  }
}

module.exports = new WelcomeScreenObject();
