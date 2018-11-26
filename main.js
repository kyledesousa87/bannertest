window.onload = function() {
    if (Enabler.isInitialized()) {
        enablerInitHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
    }
}

function enablerInitHandler() {
    setDynamic();
    showAd();
    renderDynamic();
}

function showAd() {
    document.getElementById('stage').classList.remove('remove');
    var template = dynamic.design;
    if (template == 'designOne') {
        document.getElementById('designOne').classList.remove('remove');
    } else if (template == 'designTwo') {
        document.getElementById('designTwo').classList.remove('remove');
        countersUp();
    } else if (template == 'designThree') {
        document.getElementById('designThree').classList.remove('remove');
    }
};

function setDynamic() {
    Enabler.setProfileId(10200324);
    var devDynamicContent = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250 = [{}];
    devDynamicContent.PureStorageDynamicCreative18_300x250[0]._id = 0;
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].unique_id = 1;
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].reportingLabel = "Default 300x250";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].Active = true;
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].startDate = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].startDate.RawValue = "01/01/2018";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].startDate.UtcValue = 1514764800000;
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].endDate = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].endDate.RawValue = "12/31/2018";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].endDate.UtcValue = 1546214400000;
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].exitURL = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].exitURL.Url = "https://www.purestorage.com/";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].Key_Message = "";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].design = "designTwo";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image1 = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image1.Type = "file";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/29136065/29136065_20180912151519546_img1.png";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image2 = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image2.Type = "file";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image2.Url = "https://s0.2mdn.net/ads/richmedia/studio/29136065/29136065_20180912151524904_img2.png";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image3 = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image3.Type = "file";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image3.Url = "https://s0.2mdn.net/ads/richmedia/studio/29136065/29136065_20180912151530329_img3.png";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image4 = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image4.Type = "file";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image4.Url = "https://s0.2mdn.net/ads/richmedia/studio/29136065/29136065_20180912151535157_img4.png";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image5 = {};
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image5.Type = "file";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image5.Url = "https://s0.2mdn.net/ads/richmedia/studio/29136065/29136065_20180912151540071_interim.png";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image6 = "";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].image7 = "";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text1 = "1";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text2 = "<span id='times'></span><sup>1</sup>";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text3 = "3";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text4 = "4";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text5 = "<span id='percent'></span><sup>1</sup>";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text6 = "6";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text7 = "7";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text8 = "8";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].text9 = "9";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].cta = "bla";
    devDynamicContent.PureStorageDynamicCreative18_300x250[0].extra_css = "<style>.heading9{color:pink;}</style>";
    Enabler.setDevDynamicContent(devDynamicContent);
    dynamic = dynamicContent.PureStorageDynamicCreative18_300x250[0];
}

function renderDynamic() {
    
    var template = dynamic.design;
    if (template == 'designOne') {
    document.getElementById('logob1').src = dynamic.image1.Url;
    document.getElementById('image-1').src = dynamic.image2.Url;
    document.getElementById('image-2').src = dynamic.image3.Url;
    document.getElementById('image-3').src = dynamic.image4.Url;
    document.getElementById('image-4').src = dynamic.image5.Url;
    document.getElementById('interim').src = dynamic.image6.Url;
    document.getElementById('text-1').innerHTML = dynamic.text1;
    document.getElementById('text-2').innerHTML = dynamic.text2;
    document.getElementById('text-3').innerHTML = dynamic.text3;
    document.getElementById('text-4').innerHTML = dynamic.text4;
    document.getElementById('button').innerHTML = dynamic.cta;
    } else if (template == 'designTwo') {
        document.getElementById('logob1').src = dynamic.image1.Url;
        document.getElementById('bgTwo').src = dynamic.image2.Url;
        document.getElementById('heading1').innerHTML = dynamic.text1;
    document.getElementById('heading2').innerHTML = dynamic.text2;
    document.getElementById('subheading3').innerHTML = dynamic.text3;
    document.getElementById('copy4').innerHTML = dynamic.text4;
    document.getElementById('heading5').innerHTML = dynamic.text5;
    document.getElementById('subheading6').innerHTML = dynamic.text6;
    document.getElementById('copy7').innerHTML = dynamic.text7;
    document.getElementById('heading8').innerHTML = dynamic.text8;
    document.getElementById('subheading9').innerHTML = dynamic.text9;
    document.getElementById('button2').innerHTML = dynamic.cta;
    } else if (template == 'designThree') {
            document.getElementById('logob2').src = dynamic.image1.Url;
    document.getElementById('pack').src = dynamic.image2.Url;
    document.getElementById('bgThree').src = dynamic.image3.Url;
    document.getElementById('heading9').innerHTML = dynamic.text1;
    document.getElementById('button3').innerHTML = dynamic.cta;
    }
    document.getElementById('extraCode').innerHTML = dynamic.extra_css;
document.getElementById('stage').addEventListener('click', ctaHandler); 

function ctaHandler() { 
  Enabler.exitOverride(
      "ExitURL",
      dynamic.exitURL.Url); 
}
}

/*var reset = function reset(event) {
    var element = document.querySelector('#stage');
    element.classList.add('remove');
    void element.offsetWidth; // triggering reflow
    setTimeout(function() {
        element.classList.remove('remove');
    }, 5);
};
document.addEventListener('click', reset);*/

function countersUp() {
    setTimeout(function() {
        var count = 1,
            limit = 10;
        var interval = window.setInterval(updateCount, 100);
        var element = document.getElementById('times');

        function updateCount() {
            // Increment count
            count++;
            element.textContent = count + 'x';
            // Remove interval, if we've reached the limit
            if (count >= limit) {
                window.clearInterval(interval);
            }
        }
    }, 3000);
    setTimeout(function() {
        var countTwo = 2,
            limitTwo = 102;
        var intervalTwo = window.setInterval(updateCountTwo, 100);
        var elementTwo = document.getElementById('percent');

        function updateCountTwo() {
            // Increment count
            countTwo += 10;
            elementTwo.textContent = countTwo + '%';
            // Remove interval, if we've reached the limit
            if (countTwo >= limitTwo) {
                window.clearInterval(intervalTwo);
            }
        }
    }, 9000);
}