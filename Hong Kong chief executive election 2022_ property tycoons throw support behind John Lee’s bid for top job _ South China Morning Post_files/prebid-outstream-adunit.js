/* tslint:disable */

const adUnit = {
  code: 'video1', // the div container ID
  mediaTypes: {
    banner: {
      sizes: [[300, 250], [1, 1]],
    },
    video: {
      playerSize: [640, 480],
      w: 640,
      h: 480,
      context: 'outstream',
      mimes: ['video/webm', 'application/javascript', 'video/mp4', 'application/x-mpeg', 'application/x-mpegURL'],
      protocols: [2,3,5,6],
      maxduration: 30,
    },
  },
  /* renderer: {
    url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
    render: function (bid) {
     ANOutstreamVideo.renderAd({
     targetId: bid.adUnitCode,
     adResponse: bid.adResponse,
     });
    }
  }, */
  bids: [
    /* {
      bidder: 'appnexus',
      params: {
        // placementId: 13232385, // for testing
        placementId: 17066625,
        video: {
          skippable: true,
          playback_method: [
            'auto_play_sound_off',
          ],
        },
      },
    }, */
    {
      bidder: 'unruly',
      params: {
        featureOverrides: {
          collapseOnComplete: true,
        },
        targetingUUID: '3c5b521a-36a1-4c35-a77b-63eaa5d4e794',
        siteId: 211342,
        video: {
          skippable: true,
          playback_method: [
            'auto_play_sound_off',
          ],
        },
      },
    },
    {
      bidder: 'teads',
      params: {
        placementId: 118631,
        pageId: 109129,
        video: {
          skippable: true,
          playback_method: [
            'auto_play_sound_off',
          ],
        },
      },
    },
    /* {
      bidder: 'bluebillywig',
      params: {
        publicationName: 'scmp',
        rendererCode: 'test_outstream_ad_unit',
        accountId: 626,
        connections: [ 'rubicon', 'appnexus', 'openx'],
        appnexus: {
          placement_id: 17066625,
        },
        rubicon: {
          accountId: 16912,
          siteId: 150206,
          zoneId: 1771900,
        },
        openx: {
          unit: '541171809',
          delDomain: 'scmp-d.openx.net',
        },
      },
    }, */
    {
      bidder: 'adyoulike',
      params: {
        placement: 'efaf9570c3024ccc599dba5daecd11a6',
      },
    },
    /* {
      bidder: 'rubicon',
      params: {
        accountId: 16912, siteId: 159838, zoneId: 766520,
        video: {
          language: 'en',
          playerWidth: 640,
          playerHeight: 480,
          size_id: [203]},
      },
    },
    {
      bidder: 'rubicon',
      params: {
        accountId: 16912, siteId: 159836, zoneId: 766516,
        video: {
          language: 'en',
          playerWidth: 640,
          playerHeight: 480,
          size_id: [203]},
      },
    }, */
    {
      bidder: 'triplelift',
      params: {
        inventoryCode: 'scmp_outstream_article',
        format: 'display',
        video: {
          skippable: false,
          playback_method: [
            'auto_play_sound_off',
          ],
        },
      },
    },
    {
      bidder: "spotx",
      params: {
        // channel_id: 79391, // testing ID
        channel_id: 288505,
        ad_unit: "outstream",
        outstream_function: function spotxOutstreamFunc(bid) {
          function mobileAndTabletcheck() {
            var check = false;
            (function (a) {
              if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                  a
                ) ||
                /1207|6310|6590|3gso|4thp|50[1 6]i|770s|802s|a wa|abac|ac(er|oo|s\ )|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\ m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ (n|u)|c55\/|capi|ccwa|cdm\ |cell|chtm|cldc|cmd\ |co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\ s|devi|dica|dmob|do(c|p)o|ds(12|\ d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4 7]0|os|wa|ze)|fetc|fly(\ |_)|g1 u|g560|gene|gf\ 5|g\ mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\ (m|p|t)|hei\ |hi(pt|ta)|hp( i|ip)|hs\ c|ht(c(\ | |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\ (20|go|ma)|i230|iac( |\ |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\ |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\ [a w])|libw|lynx|m1\ w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\ cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\ | |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0 2]|n20[2 3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\ |on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\ ([1 8]|c))|phil|pire|pl(ay|uc)|pn\ 2|po(ck|rt|se)|prox|psio|pt\ g|qa\ a|qc(07|12|21|32|60|\ [2 7]|i\ )|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\ |oo|p\ )|sdk\/|se(c(\ |0|1)|47|mc|nd|ri)|sgh\ |shar|sie(\ |m)|sk\ 0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\ |v\ |v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\ |tdg\ |tel(i|m)|tim\ |t\ mo|to(pl|sh)|ts(70|m\ |m3|m5)|tx\ 9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0 3]|\ v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\ | )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\ |your|zeto|zte\ /i.test(
                  a.substr(0, 4)
                )
              )
                check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
          }
          var bMobile = mobileAndTabletcheck();
          if (bMobile) {
            var playerWidth = '300';
            var playerHeight = '169';
          } else {
            var playerWidth = '640';
            var playerHeight = '360';
          }
          
          const videoDiv = bid.adUnitCode;
          window.console.log(
            "[SPOTX][renderer] Handle SpotX custom outstream renderer"
          );
          let script = window.document.createElement("script");
          script.type = "text/javascript";
          script.src =
            "//cdn.spotxcdn.com/website/integration_test/media/asia/EASI.js";
          script.setAttribute(
            "data-spotx_channel_id",
            "" + bid.channel_id
          );
          script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
          script.setAttribute("data-spotx_content_width", playerWidth);
          script.setAttribute(
            "data-spotx_content_height",
            playerHeight
          );
          script.setAttribute(
            "data-spotx_content_page_url",
            bid.renderer.config.content_page_url
          );
          script.setAttribute("data-spotx_ad_unit", "incontent");
          script.setAttribute("data-spotx_autoplay", "1");
          script.setAttribute("data-spotx_continue_out_of_view", "1");
          script.setAttribute(
            "data-spotx_content_container_id",
            videoDiv
          );
          var vid_contain = window.document.getElementById(videoDiv);
          if (vid_contain) {
            vid_contain.style.cssText = "display: none; margin-bottom: 20px";
            vid_contain.appendChild(script);
          }
        },
      },
    },
  ]
}

window.adjs = window.adjs || {}
const adjs = window.adjs

adjs.prebidOutstreamAdunit = adUnit
adjs.prebidTimeout = 5000
adjs.prebidFailsafeTimeout = 5000
adjs.prebidDfpSlotSizes = [[1, 1], '300x250v', [640,480], [640, 360], [480, 360], [320, 180], 'fluid']