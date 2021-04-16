import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutterPortfolio/extensions/hoverExtension.dart';
import 'package:flutter/material.dart';
import 'package:flutterPortfolio/pages/project_work.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:flutterPortfolio/widgets/experience.dart';
import 'package:flutterPortfolio/widgets/flipWidget.dart';
import 'package:flutterPortfolio/widgets/mobile_mockup.dart';
import 'package:flutterPortfolio/widgets/sidebar_desktop.dart';
import 'package:velocity_x/velocity_x.dart';

class DesktopHomepage extends StatefulWidget {
  DesktopHomepage({Key? key}) : super(key: key);

  @override
  _DesktopHomepageState createState() => _DesktopHomepageState();
}

class _DesktopHomepageState extends State<DesktopHomepage>
    with SingleTickerProviderStateMixin {
  double flutterElevation = 5;
  double githubElevation = 5;
  double swiftElevation = 5;
  double firebaseElevation = 5;
  double adobeXDElevation = 5;
  double androidElevation = 5;
  bool easterEggVisibility = false;

  final _mobileHomeButtonKey = GlobalKey();
  final _maximizeButtonHomePageKey = GlobalKey();
  final _maximizeButtonProjectPageKey = GlobalKey();
  final _minimizeButtonHomePageKey = GlobalKey();
  final _minimizeButtonProjectPageKey = GlobalKey();

  double paddingLogic() {
    if (context.screenWidth < 950) {
      return 0;
    } else {
      return 30;
    }
  }

  @override
  Widget build(BuildContext context) {
    print("building...");
    return AnimatedPadding(
      padding: EdgeInsets.symmetric(vertical: 50, horizontal: paddingLogic()),
      duration: Duration(milliseconds: 200),
      child: Container(
        height: context.screenHeight - 100,
        width: context.screenWidth,
        constraints: BoxConstraints(minHeight: 600),
        child: Row(
          children: [
            isExpanded ? Container() : SideBarDesktop(),
            !isMinimized
                ? Container()
                : Flexible(
                    flex: 15,
                    child: GestureDetector(
                      onTapUp: (tapDetails) {
                        RenderBox renderBoxMaximizeButton =
                            _maximizeButtonProjectPageKey.currentContext!
                                .findRenderObject() as RenderBox;
                        Offset topLeftCornerMaximize =
                            renderBoxMaximizeButton.localToGlobal(Offset.zero);
                        Rect rectangleMaximize = topLeftCornerMaximize &
                            renderBoxMaximizeButton.size;
                        if (rectangleMaximize
                            .contains(tapDetails.globalPosition)) {
                          setState(() {
                            isExpanded = !isExpanded;
                          });
                        }
                        RenderBox renderBoxMinimizeButton =
                            _minimizeButtonProjectPageKey.currentContext!
                                .findRenderObject() as RenderBox;
                        Offset topLeftCornerMinimize =
                            renderBoxMinimizeButton.localToGlobal(Offset.zero);
                        Rect rectangleMinimize = topLeftCornerMinimize &
                            renderBoxMinimizeButton.size;
                        if (rectangleMinimize
                            .contains(tapDetails.globalPosition)) {
                          setState(() {
                            isMinimized = !isMinimized;
                          });
                        }
                      },
                      child: ProjectWorks(
                          isMobile: false,
                          maximizeButtonProjectPageKey:
                              _maximizeButtonProjectPageKey,
                          minimizeButtonProjectPageKey:
                              _minimizeButtonProjectPageKey),
                    ),
                  ),
            isMinimized
                ? Container()
                : Flexible(
                    flex: 15,
                    child: Card(
                      elevation: 10,
                      color: ColorsX.blackWithOpacity,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: GestureDetector(
                        onTapUp: (tapDetails) {
                          RenderBox renderBoxHomeButton = _mobileHomeButtonKey
                              .currentContext!
                              .findRenderObject() as RenderBox;
                          Offset topLeftCorner =
                              renderBoxHomeButton.localToGlobal(Offset.zero);
                          Rect rectangle =
                              topLeftCorner & renderBoxHomeButton.size;
                          if (rectangle.contains(tapDetails.globalPosition)) {
                            setState(() {
                              easterEggVisibility = !easterEggVisibility;
                            });
                          }
                          RenderBox renderBoxMaximizeButton =
                              _maximizeButtonHomePageKey.currentContext!
                                  .findRenderObject() as RenderBox;
                          Offset topLeftCornerMaximize = renderBoxMaximizeButton
                              .localToGlobal(Offset.zero);
                          Rect rectangleMaximize = topLeftCornerMaximize &
                              renderBoxMaximizeButton.size;
                          if (rectangleMaximize
                              .contains(tapDetails.globalPosition)) {
                            setState(() {
                              isExpanded = !isExpanded;
                            });
                          }

                          RenderBox renderBoxMinimizeButton =
                              _minimizeButtonHomePageKey.currentContext!
                                  .findRenderObject() as RenderBox;
                          Offset topLeftCornerMinimize = renderBoxMinimizeButton
                              .localToGlobal(Offset.zero);
                          Rect rectangleMinimize = topLeftCornerMinimize &
                              renderBoxMinimizeButton.size;
                          if (rectangleMinimize
                              .contains(tapDetails.globalPosition)) {
                            setState(() {
                              isMinimized = !isMinimized;
                            });
                          }
                        },
                        child: Stack(
                          children: [
                            MobileMockup(
                              easterEggVisibility: easterEggVisibility,
                              mobileHomeButtonKey: _mobileHomeButtonKey,
                            ),
                            Positioned(
                              right: 10,
                              top: 10,
                              child: [
                                Card(
                                  key: _maximizeButtonHomePageKey,
                                  color: ColorsX.green,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(30),
                                  ),
                                ).h(25).w(25).showCursorOnHover.tooltip(
                                    isExpanded ? "Restore" : "Maximize"),
                                Card(
                                  key: _minimizeButtonHomePageKey,
                                  color: ColorsX.yellow,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(30),
                                  ),
                                )
                                    .h(25)
                                    .w(25)
                                    .showCursorOnHover
                                    .tooltip("Minimize"),
                                Card(
                                  color: ColorsX.red,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(30),
                                  ),
                                ).h(25).w(25).showCursorOnHover,
                              ].hStack(),
                            ),
                            [
                              AutoSizeText.rich(
                                TextSpan(
                                  children: [
                                    '_About'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'M'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'e'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                  ],
                                ),
                                style: TextStyle(
                                    fontSize: TextSize.instance.size8),
                              ),
                              VxBox()
                                  .color(ColorsX.red)
                                  .height(3)
                                  .width(60)
                                  .make()
                                  .pSymmetric(v: 5),
                              VxBox().height(20).make(),
                              about.text
                                  .maxLines(4)
                                  .color(ColorsX.whiteWithOpacity)
                                  .semiBold
                                  .size(TextSize.instance.size5)
                                  .make()
                                  .pOnly(right: 15),
                              VxBox().height(30).make(),
                              Experience(),
                              AutoSizeText.rich(
                                TextSpan(
                                  children: [
                                    '_What'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'I'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'm'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'D'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'oing'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                  ],
                                ),
                                style: TextStyle(
                                    fontSize: TextSize.instance.size8),
                              ),
                              VxBox()
                                  .color(ColorsX.red)
                                  .height(3)
                                  .width(60)
                                  .make()
                                  .pSymmetric(v: 5),
                              VxBox().height(10).make(),
                              Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      Image.asset(Images.phone)
                                          .box
                                          .width(45)
                                          .make()
                                          .tooltip("Phone"),
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.start,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            '_ApplicationDevelopment'
                                                .richText
                                                .color(ColorsX.white)
                                                .semiBold
                                                .make()
                                                .pOnly(bottom: 5),
                                            "Able to create beautiful cross-platform and native apps by using Flutter, Java/Kotlin, Swift."
                                                .text
                                                .maxLines(4)
                                                .color(ColorsX.white)
                                                .semiBold
                                                .size(TextSize.instance.size3)
                                                .make()
                                                .pSymmetric(h: 5),
                                          ],
                                        ).pOnly(
                                          left: 10,
                                          top: 5,
                                          right: 10,
                                        ),
                                      ),
                                    ],
                                  ).p12(),
                                  Row(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      Image.asset(Images.support)
                                          .box
                                          .width(50)
                                          .make()
                                          .tooltip("Support"),
                                      Expanded(
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.start,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            '_StrongSupport'
                                                .richText
                                                .color(ColorsX.white)
                                                .semiBold
                                                .make()
                                                .pOnly(bottom: 5),
                                            "Able to communicate ideas in a brief way."
                                                .text
                                                .maxLines(4)
                                                .color(ColorsX.white)
                                                .semiBold
                                                .size(TextSize.instance.size3)
                                                .make()
                                                .pOnly(right: 15)
                                                .pSymmetric(h: 5),
                                          ],
                                        ).pOnly(
                                          left: 10,
                                          top: 5,
                                          right: 10,
                                        ),
                                      ),
                                    ],
                                  ).p12(),
                                ],
                              ).p32(),
                              VxBox().height(30).make(),
                              AutoSizeText.rich(
                                TextSpan(
                                  children: [
                                    '_What'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'T'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'echnologies'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'I'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'U'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.red)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                    'se'
                                        .textSpan
                                        .semiBold
                                        .color(ColorsX.white)
                                        // .size(TextSize.instance.size5)
                                        .make(),
                                  ],
                                ),
                                style: TextStyle(
                                    fontSize: TextSize.instance.size8),
                              ),
                              VxBox()
                                  .color(ColorsX.red)
                                  .height(3)
                                  .width(60)
                                  .make()
                                  .pSymmetric(v: 5),
                              Wrap(
                                children: [
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        flutterElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        flutterElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: flutterElevation,
                                        child: 'Flutter'
                                            .richText
                                            .semiBold
                                            .color(ColorsX.blackWithOpacity)
                                            .size(TextSize.instance.size7)
                                            .make()
                                            .centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: flutterElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: FlutterLogo(
                                          size: 20,
                                        ).p(20),
                                      ),
                                    ),
                                  ).p(20),
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        githubElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        githubElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: githubElevation,
                                        child: 'GitHub'
                                            .richText
                                            .semiBold
                                            .color(ColorsX.blackWithOpacity)
                                            .size(TextSize.instance.size7)
                                            .make()
                                            .centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: githubElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: Image.asset(
                                          Images.githubLogo,
                                        ).p20(),
                                      ),
                                    ),
                                  ).p(20),
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        firebaseElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        firebaseElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: firebaseElevation,
                                        child: 'Firebase'
                                            .richText
                                            .semiBold
                                            .color(ColorsX.blackWithOpacity)
                                            .size(TextSize.instance.size7)
                                            .make()
                                            .centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: firebaseElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: Image.asset(
                                          Images.firebase,
                                        ).p20(),
                                      ),
                                    ),
                                  ).p(20),
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        adobeXDElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        adobeXDElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: adobeXDElevation,
                                        child: AutoSizeText.rich(
                                          TextSpan(
                                            children: [
                                              'Adobe'
                                                  .textSpan
                                                  .semiBold
                                                  .color(
                                                      ColorsX.blackWithOpacity)
                                                  // .size(TextSize.instance.size5)
                                                  .make(),
                                              'X'
                                                  .textSpan
                                                  .semiBold
                                                  .color(ColorsX.red)
                                                  // .size(TextSize.instance.size5)
                                                  .make(),
                                              'D'
                                                  .textSpan
                                                  .semiBold
                                                  .color(
                                                      ColorsX.blackWithOpacity)
                                                  // .size(TextSize.instance.size5)
                                                  .make(),
                                            ],
                                          ),
                                          style: TextStyle(
                                              fontSize:
                                                  TextSize.instance.size7),
                                        ).centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: adobeXDElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: Image.asset(
                                          Images.adobeXd,
                                        ).p(10),
                                      ),
                                    ),
                                  ).p(20),
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        androidElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        androidElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: androidElevation,
                                        child: 'Android'
                                            .richText
                                            .semiBold
                                            .color(ColorsX.blackWithOpacity)
                                            .size(TextSize.instance.size7)
                                            .make()
                                            .centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: androidElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: Image.asset(
                                          Images.android,
                                        ).p(15),
                                      ),
                                    ),
                                  ).p(20),
                                  MouseRegion(
                                    onHover: (enter) {
                                      setState(() {
                                        swiftElevation = 25;
                                      });
                                    },
                                    onExit: (exit) {
                                      setState(() {
                                        swiftElevation = 5;
                                      });
                                    },
                                    child: FlipWidget(
                                      height: 120,
                                      width: 120,
                                      frontWidget: Card(
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.6),
                                        shadowColor: ColorsX.white,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: swiftElevation,
                                        child: 'Swift'
                                            .richText
                                            .semiBold
                                            .color(ColorsX.blackWithOpacity)
                                            .size(TextSize.instance.size7)
                                            .make()
                                            .centered(),
                                      ),
                                      backWidget: Card(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20)),
                                        elevation: swiftElevation,
                                        shadowColor: ColorsX.white,
                                        color: ColorsX.whiteWithOpacity
                                            .withOpacity(0.4),
                                        child: Image.asset(
                                          Images.swift,
                                        ).p(10),
                                      ),
                                    ),
                                  ).p(20),
                                  VxBox().height(60).make()
                                ],
                              )
                            ]
                                .vStack(
                                  alignment: MainAxisAlignment.spaceEvenly,
                                  crossAlignment: CrossAxisAlignment.start,
                                )
                                .scrollVertical()
                                .p(20),
                          ],
                        ).p(5),
                      ),
                    ),
                  ),
          ],
        ),
      ).centered(),
    );
  }
}
