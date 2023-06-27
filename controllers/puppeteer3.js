const puppeteer = require("puppeteer");
async function slplscrape3(arg1, arg2) {
  console.log("puppet");
  console.log(arg1);
  let results;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    `https://slpl.bibliocommons.com/v2/search?custom_edit=false&query=(title%3A(${arg1})%20AND%20callnumber%3A(%22${arg2}*%22)%20)&searchType=bl&suppress=true`
  );
  await page.click(
    "#content > div > div > div > div.cp-layout.results_container.drawer-layout-left.row > div.result-content.active.col-12.col-xs-12.col-sm-12.col-md-12.col-lg-9.cp-layout-main-content > section > section.results-list.row > div > ul > li:nth-child(1) > div.col-md-10.item-column > div > div.cp-search-result-item-info > div:nth-child(2) > div > h2 > a > span.title-content"
  );
  await page.waitForSelector(
    "#content > div > div > section.cp-bib-transact.container > div > div.col-md-5.col-lg-5.col-xl-6.main-info > div.cp-bib-description > div > div > a"
  );
  await page.click(
    "#content > div > div > section.cp-bib-transact.container > div > div.col-md-5.col-lg-5.col-xl-6.main-info > div.cp-bib-description > div > div > a"
  );

  //await page.click("");
  const paragraph = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/section[1]/div/div[2]/div[6]/div/div/div"
  );
  const paragraphresult = await paragraph.evaluate((el) => el.textContent);
  results = paragraphresult;
  console.log(results);
  return results;
}
module.exports = slplscrape3;
