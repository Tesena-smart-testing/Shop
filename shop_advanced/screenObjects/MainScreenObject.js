class MainScreenObject {
  getElementByResourceId(resourceId) {
    return $(`android=new UiSelector().resourceId("${resourceId}")`);
  }

  get searachField() {
    return this.getElementByResourceId("SearchField");
  }

  get computerAndLaptopsSection() {
    const computerSectionElement = $(
      `//*[contains(@text, "Computers and Laptops")]`
    );
    return computerSectionElement;
  }

  get productCard() {
    return this.getElementByResourceId("CatalogProduct");
  }

  get productVariantsDetail() {
    return this.getElementByResourceId("ProductDetailVariantsCard");
  }

  async clickOnSearchField() {
    await this.searachField.click();
  }

  async clickOnProductCard() {
    await this.productCard.click();
  }
}

module.exports = new MainScreenObject();
