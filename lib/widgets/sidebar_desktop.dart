import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:flutterPortfolio/utils/MeasureWidgetSize.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutterPortfolio/extensions/hoverExtension.dart';

class SideBarDesktop extends StatefulWidget {
  const SideBarDesktop({
    Key? key,
  }) : super(key: key);

  @override
  _SideBarDesktopState createState() => _SideBarDesktopState();
}

class _SideBarDesktopState extends State<SideBarDesktop> {
  double sidebarWidth = 100;

  @override
  Widget build(BuildContext context) {
    return Flexible(
      flex: 5,
      child: MeasureSize(
        onChange: (Size? size) {
          if (size != null) sidebarWidth = size.width;
          setState(() {});
        },
        child: Card(
          elevation: 10,
          color: ColorsX.blackWithOpacity,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10.0),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            verticalDirection: VerticalDirection.down,
            children: [
              Container(
                width: sidebarWidth * 0.6,
                height: sidebarWidth * 0.6,
                constraints: BoxConstraints(
                  minWidth: 120,
                  minHeight: 120,
                  maxHeight: 180,
                  maxWidth: 180,
                ),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(
                    Radius.circular(150),
                  ),
                  border: Border.all(
                    width: 5.0,
                    color: ColorsX.white,
                  ),
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(sidebarWidth),
                  child: Image.asset(
                    Images.profile,
                  ),
                ),
              ).pOnly(top: 20, bottom: 5),
              Container(
                margin: EdgeInsets.symmetric(horizontal: 5),
                child: AutoSizeText.rich(
                  TextSpan(
                    children: [
                      "Ketan"
                          .textSpan
                          .bold
                          .color(ColorsX.white)
                          .size(TextSize.instance.size8)
                          .make(),
                      " Choyal"
                          .textSpan
                          .extraBold
                          .color(ColorsX.red)
                          .size(TextSize.instance.size8)
                          .make()
                    ],
                  ),
                )
                    .p(10)
                    // .objectCenter()
                    .centered(),
              ),
              Container(
                width: sidebarWidth,
                height: 40,
                padding: EdgeInsets.symmetric(horizontal: 5),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10.0),
                  color: ColorsX.white,
                ),
                child: AutoSizeText.rich(
                  // maxLines: 2,
                  // softWrap: true,
                  TextSpan(
                    children: <TextSpan>[
                      '_Mobile'
                          .textSpan
                          .semiBold
                          .color(ColorsX.blackWithOpacity)
                          // .size(TextSize.instance.size5)
                          .make(),
                      'A'
                          .textSpan
                          .semiBold
                          .color(ColorsX.red)
                          // .size(TextSize.instance.size5)
                          .make(),
                      'pp'
                          .textSpan
                          .semiBold
                          .color(ColorsX.blackWithOpacity)
                          // .size(TextSize.instance.size5)
                          .make(),
                      'D'
                          .textSpan
                          .semiBold
                          .color(ColorsX.red)
                          // .size(TextSize.instance.size5)
                          .make(),
                      'eveloper'
                          .textSpan
                          .semiBold
                          .color(ColorsX.blackWithOpacity)
                          // .size(TextSize.instance.size5)
                          .make(),
                    ],
                  ),
                  // minFontSize: 10,
                  maxLines: 1,
                  style: TextStyle(fontSize: TextSize.instance.size5),
                ).centered().pSymmetric(h: 2),
              ).pSymmetric(v: 5),
              Container(
                alignment: Alignment.center,
                child: Wrap(
                  alignment: WrapAlignment.spaceAround,
                  spacing: 20,
                  runAlignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  children: [
                    Image.asset(Images.twitter)
                        .box
                        .size(30, 25)
                        .make()
                        .tooltip("Twitter")
                        .click(
                          () {
                            launch('https://twitter.com/ketanchoyal');
                          },
                        )
                        .make()
                        .showCursorOnHover
                        .moveUpOnHover,
                    // WidthBox(20),
                    Image.asset(Images.linkedin)
                        .box
                        .size(30, 25)
                        .make()
                        .tooltip("LinkedIn")
                        .click(() {
                          launch('https://www.linkedin.com/in/ketanchoyal/');
                        })
                        .make()
                        .showCursorOnHover
                        .moveUpOnHover,
                    // WidthBox(20),
                    Image.asset(Images.medium)
                        .box
                        .size(30, 25)
                        .make()
                        .tooltip("Medium")
                        .click(() {
                          launch('https://medium.com/@ketanchoyal');
                        })
                        .make()
                        .showCursorOnHover
                        .moveUpOnHover,
                    // WidthBox(20),
                    Image.asset(
                      Images.instagram,
                      filterQuality: FilterQuality.high,
                    )
                        .box
                        .size(30, 25)
                        .make()
                        .tooltip("Instagram")
                        .click(() {
                          launch('https://www.instagram.com/ketanchoyal');
                        })
                        .make()
                        .showCursorOnHover
                        .moveUpOnHover,
                  ],
                ),
              ).pSymmetric(h: 5, v: 15),
              Card(
                elevation: 10,
                color: ColorsX.white,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.asset(Images.location)
                            .box
                            .size(30, 25)
                            .make()
                            .p(5)
                            .moveUpOnHover,
                        // WidthBox(10),
                        Image.asset(
                          Images.github,
                        )
                            .box
                            .size(30, 25)
                            .make()
                            .p(5)
                            .click(() {
                              launch('https://github.com/ketanchoyal');
                            })
                            .make()
                            .showCursorOnHover
                            .moveUpOnHover,
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        "_London, CA"
                            .richText
                            // .text
                            .bold
                            .size(TextSize.instance.size4!)
                            .color(ColorsX.blackWithOpacity)
                            .make()
                            .pSymmetric(v: 10)
                            .click(() {})
                            .make()
                            .showCursorOnHover,

                        // WidthBox(10),
                        "_GitHub"
                            .richText
                            .bold
                            .size(TextSize.instance.size4!)
                            .color(ColorsX.blackWithOpacity)
                            .make()
                            .pSymmetric(v: 10)
                            .click(() {})
                            .make()
                            .showCursorOnHover,
                      ],
                    )
                  ],
                ).h(100),
              ).pSymmetric(v: 10),
              Expanded(
                child: Wrap(
                  // crossAxisAlignment: CrossAxisAlignment.end,
                  crossAxisAlignment: WrapCrossAlignment.end,
                  alignment: WrapAlignment.center,
                  runAlignment: WrapAlignment.end,
                  children: [
                    Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        RichText(
                          textAlign: TextAlign.left,
                          text: TextSpan(
                            style: TextStyle(
                              fontSize: TextSize.instance.size7,
                              fontWeight: FontWeight.w500,
                            ),
                            children: <TextSpan>[
                              "_Have".textSpan.color(ColorsX.white).make(),
                              "A".textSpan.color(ColorsX.red).make(),
                              "n".textSpan.color(ColorsX.white).make(),
                              "I".textSpan.color(ColorsX.red).make(),
                              "dea".textSpan.color(ColorsX.white).make(),
                              "?".textSpan.color(ColorsX.white).make(),
                              "?".textSpan.color(ColorsX.red).make(),
                            ],
                          ),
                        ),
                        RichText(
                          textAlign: TextAlign.left,
                          text: TextSpan(
                            style: TextStyle(
                              fontSize: TextSize.instance.size8,
                              fontWeight: FontWeight.w600,
                            ),
                            children: <TextSpan>[
                              "_SAY".textSpan.color(ColorsX.white).make(),
                              "H".textSpan.color(ColorsX.red).make(),
                              "I".textSpan.color(ColorsX.white).make(),
                              "!".textSpan.color(ColorsX.red).make(),
                            ],
                          ),
                        ),
                        VxBox()
                            .color(ColorsX.red)
                            .height(3)
                            .width(60)
                            .make()
                            .pSymmetric(v: 2),
                        // Container(
                        //   height: 3,
                        //   width: 60,
                        //   color: ColorsX.red,
                        // ),
                        // 'ketanchoyal@gmail.com'
                        //     .richText
                        //     .color(ColorsX.whiteWithOpacity)
                        //     .make()
                      ],
                    ).p(20),
                    Image.asset(Images.mail)
                        .box
                        .size(40, 40)
                        .make()
                        .tooltip("Mail")
                        .click(
                          () {
                            launch('mailto:ketanchoyal@gmail.com');
                          },
                        )
                        .make()
                        .pOnly(bottom: 30)
                        .moveUpOnHover
                        .showCursorOnHover,
                  ],
                ),
              ),
            ],
          ).p(10),
        ),
      ),
    );
  }
}
