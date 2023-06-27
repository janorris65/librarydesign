const puppeteer = require("puppeteer");
async function slplscrape2(arg) {
  console.log("puppet");
  console.log(arg);
  let results = [];
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    `https://slpl.bibliocommons.com/v2/search?custom_edit=false&query=callnumber%3A(%22${arg}*%22)&searchType=bl&suppress=true&f_FORMAT=BK&f_AUDIENCE=adult&f_FICTION_TYPE=NONFICTION`
  );
  await page.setViewport({ width: 1080, height: 1024 });
  const trial1 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[1]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result1 = await trial1.evaluate((el) => el.textContent);
  const numtrial1 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[1]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult1 = await numtrial1.evaluate((el) => el.textContent);
  // const auth1 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[1]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult1 = await auth1.evaluate((el) => el.textContent);
  const FirstResult = {
    name: result1,
    num: numresult1,
    // auth: authresult1,
  };
  results.push(FirstResult);

  const trial2 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[2]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result2 = await trial2.evaluate((el) => el.textContent);
  const numtrial2 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[2]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult2 = await numtrial2.evaluate((el) => el.textContent);
  // const auth2 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[2]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult2 = await auth2.evaluate((el) => el.textContent);
  const SecondResult = {
    name: result2,
    num: numresult2,
    //auth: authresult2,
  };
  results.push(SecondResult);

  const trial3 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[3]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result3 = await trial3.evaluate((el) => el.textContent);
  const numtrial3 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[3]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult3 = await numtrial3.evaluate((el) => el.textContent);
  // const auth3 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[3]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult3 = await auth3.evaluate((el) => el.textContent);
  const ThirdResult = {
    name: result3,
    num: numresult3,
    // auth: authresult3,
  };
  results.push(ThirdResult);

  const trial4 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[4]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result4 = await trial4.evaluate((el) => el.textContent);
  const numtrial4 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[4]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult4 = await numtrial4.evaluate((el) => el.textContent);
  // const auth4 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[4]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult4 = await auth4.evaluate((el) => el.textContent);
  const FourthResult = {
    name: result4,
    num: numresult4,
    // auth: authresult4,
  };
  results.push(FourthResult);

  const trial5 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[5]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result5 = await trial5.evaluate((el) => el.textContent);
  const numtrial5 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[5]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult5 = await numtrial5.evaluate((el) => el.textContent);
  // const auth5 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[5]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult5 = await auth5.evaluate((el) => el.textContent);
  const FifthResult = {
    name: result5,
    num: numresult5,
    // auth: authresult5,
  };
  results.push(FifthResult);

  const trial6 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[6]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result6 = await trial6.evaluate((el) => el.textContent);
  const numtrial6 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[6]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult6 = await numtrial6.evaluate((el) => el.textContent);
  // const auth6 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[6]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult6 = await auth6.evaluate((el) => el.textContent);
  const SixthResult = {
    name: result6,
    num: numresult6,
    // auth: authresult6,
  };
  results.push(SixthResult);

  const trial7 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[7]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result7 = await trial7.evaluate((el) => el.textContent);
  const numtrial7 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[7]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult7 = await numtrial7.evaluate((el) => el.textContent);
  // const auth7 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[7]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult7 = await auth7.evaluate((el) => el.textContent);
  const SeventhResult = {
    name: result7,
    num: numresult7,
    //auth: authresult7,
  };
  results.push(SeventhResult);

  const trial8 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[8]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result8 = await trial8.evaluate((el) => el.textContent);
  const numtrial8 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[8]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult8 = await numtrial8.evaluate((el) => el.textContent);
  // const auth8 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[8]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult8 = await auth8.evaluate((el) => el.textContent);
  const EighthResult = {
    name: result8,
    num: numresult8,
    //  auth: authresult8,
  };
  results.push(EighthResult);

  const trial9 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[9]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result9 = await trial9.evaluate((el) => el.textContent);
  const numtrial9 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[9]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult9 = await numtrial9.evaluate((el) => el.textContent);
  // const auth9 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[9]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult9 = await auth9.evaluate((el) => el.textContent);
  const NinthResult = {
    name: result9,
    num: numresult9,
    //  auth: authresult9,
  };
  results.push(NinthResult);

  const trial10 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[10]/div[2]/div/div[1]/div[2]/div/h2/a/span[1]"
  );
  const result10 = await trial10.evaluate((el) => el.textContent);
  const numtrial10 = await page.waitForXPath(
    "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[10]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/a/span[1]/div/span"
  );
  const numresult10 = await numtrial10.evaluate((el) => el.textContent);
  // const auth10 = await page.waitForXPath(
  //   "/html/body/div[1]/div/div/main/div/div/div/div[2]/div[2]/section/section[2]/div/ul/li[10]/div[2]/div/div[1]/div[2]/div/span/span/span/a"
  // );
  // const authresult10 = await auth10.evaluate((el) => el.textContent);
  const TenthResult = {
    name: result10,
    num: numresult10,
    // auth: authresult10,
  };
  results.push(TenthResult);
  console.log(results);
  return results;
}
module.exports = slplscrape2;
