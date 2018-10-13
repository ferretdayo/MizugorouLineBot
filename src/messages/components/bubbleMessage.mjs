export const bubbleComponentForHotpepper = (bubbleInfo) => {
  const {imagePath, targetUrl, title, place, shopOpenInfo, budget, genre, couponUrl} = bubbleInfo
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: imagePath,
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: targetUrl
      }
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              weight: "bold",
              wrap: true,
              text: title
            }
          ]
        },
        // 店情報
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "場所",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2
                },
                {
                  type: "text",
                  text: place,
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5
                }
              ]
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "営業時間",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2
                },
                {
                  type: "text",
                  text: shopOpenInfo,
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5
                }
              ]
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "種類",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2,
                },
                {
                  type: "text",
                  text: genre,
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5
                }
              ]
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "予算",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2,
                },
                {
                  type: "text",
                  text: budget,
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "クーポン情報",
            uri: couponUrl
          }
        },
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "詳細",
            uri: targetUrl
          }
        }
      ],
      flex: 0
    }
  }
}