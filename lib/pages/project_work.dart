import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutterPortfolio/extensions/hoverExtension.dart';
import 'package:flutter/material.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

class ProjectWorks extends StatelessWidget {
  const ProjectWorks({
    Key key,
    @required this.isMobile,
    @required GlobalKey<State<StatefulWidget>> maximizeButtonProjectPageKey,
    @required GlobalKey<State<StatefulWidget>> minimizeButtonProjectPageKey,
  })  : _maximizeButtonProjectPageKey = maximizeButtonProjectPageKey,
        _minimizeButtonProjectPageKey = minimizeButtonProjectPageKey,
        super(key: key);

  final GlobalKey<State<StatefulWidget>> _maximizeButtonProjectPageKey;
  final GlobalKey<State<StatefulWidget>> _minimizeButtonProjectPageKey;
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 10,
      color: ColorsX.blackWithOpacity,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Stack(
        children: [
          Positioned(
            right: 15,
            top: 15,
            child: [
              Card(
                key: _maximizeButtonProjectPageKey,
                color: ColorsX.green,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              )
                  .h(25)
                  .w(25)
                  .showCursorOnHover
                  .tooltip(isExpanded ? "Restore" : "Maximize"),
              Card(
                key: _minimizeButtonProjectPageKey,
                color: ColorsX.yellow,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              ).h(25).w(25).showCursorOnHover.tooltip("Minimize"),
              Card(
                color: ColorsX.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              ).h(25).w(25).showCursorOnHover,
            ].hStack(),
          ),
          Positioned(
            top: 0,
            left: 0,
            child: [
              AutoSizeText.rich(
                TextSpan(
                  children: [
                    '_Project'
                        .textSpan
                        .semiBold
                        .color(ColorsX.white)
                        // .size(TextSize.instance.size5)
                        .make(),
                    'W'
                        .textSpan
                        .semiBold
                        .color(ColorsX.red)
                        // .size(TextSize.instance.size5)
                        .make(),
                    'orks'
                        .textSpan
                        .semiBold
                        .color(ColorsX.white)
                        // .size(TextSize.instance.size5)
                        .make(),
                  ],
                ),
                style: TextStyle(fontSize: TextSize.instance.size8),
              ),
              VxBox()
                  .color(ColorsX.red)
                  .height(3)
                  .width(60)
                  .make()
                  .pSymmetric(v: 5),
            ].vStack().p20(),
          ),
          Positioned(
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            child: SingleChildScrollView(
              child: [
                Card(
                  elevation: 10,
                  color: ColorsX.gray.withOpacity(0.7),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: [
                    "theParker"
                        .richText
                        .color(ColorsX.red)
                        .semiBold
                        .size(TextSize.instance.size7)
                        .make()
                        .pOnly(bottom: 5),
                    "Application based on shared parking idea.\nDeveloped using native Android and iOS tools.\nCurrently a Flutter version of this app is under development"
                        .richText
                        .maxLines(4)
                        .size(TextSize.instance.size5)
                        .color(ColorsX.white)
                        .make()
                        .pOnly(left: 5),
                    [
                      Image.asset(Images.gitHubiOs)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("iOS App")
                          .click(
                            () {
                              launch(
                                  'https://github.com/ketanchoyal/theParker-iOS');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                      Image.asset(Images.gitHubAndroid)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("Android App")
                          .click(
                            () {
                              launch(
                                  'https://github.com/ketanchoyal/theParker');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                      Image.asset(Images.gitHubDart)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("Flutter App")
                          .click(
                            () {
                              launch(
                                  'https://github.com/ketanchoyal/theParker-Flutter');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                    ]
                        .hStack(
                          alignment: MainAxisAlignment.end,
                          crossAlignment: CrossAxisAlignment.end,
                        )
                        .pOnly(top: 10, left: 10),
                  ].vStack(alignment: MainAxisAlignment.start).p(10),
                ).w(context.screenWidth * (isMobile ? 0.8 : 0.6)).centered(),
                Card(
                  elevation: 10,
                  color: ColorsX.gray.withOpacity(0.7),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: [
                    "Our E-School"
                        .richText
                        .color(ColorsX.red)
                        .semiBold
                        .size(TextSize.instance.size7)
                        .make()
                        .pOnly(bottom: 5),
                    "Cross platform application for school management developed using Flutter Framework"
                        .richText
                        .maxLines(4)
                        .size(TextSize.instance.size5)
                        .color(ColorsX.white)
                        .make()
                        .pOnly(left: 5),
                    [
                      Image.asset(Images.gitHubDart)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("Flutter App")
                          .click(
                            () {
                              launch(
                                  'https://github.com/ketanchoyal/Academic-Connect');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                    ]
                        .hStack(
                          alignment: MainAxisAlignment.end,
                          crossAlignment: CrossAxisAlignment.end,
                        )
                        .pOnly(top: 10, left: 10),
                  ].vStack(alignment: MainAxisAlignment.start).p(10),
                ).w(context.screenWidth * (isMobile ? 0.8 : 0.6)).centered(),
                Card(
                  elevation: 10,
                  color: ColorsX.gray.withOpacity(0.7),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: [
                    "COVID-19"
                        .richText
                        .color(ColorsX.red)
                        .semiBold
                        .size(TextSize.instance.size7)
                        .make()
                        .pOnly(bottom: 5),
                    "iOS Application to get COVID-19 data of any country"
                        .richText
                        .maxLines(4)
                        .size(TextSize.instance.size5)
                        .color(ColorsX.white)
                        .make()
                        .pOnly(left: 5),
                    [
                      Image.asset(Images.gitHubiOs)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("iOS App")
                          .click(
                            () {
                              launch('https://github.com/ketanchoyal/COVID-19');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                    ]
                        .hStack(
                          alignment: MainAxisAlignment.end,
                          crossAlignment: CrossAxisAlignment.end,
                        )
                        .pOnly(top: 10, left: 10),
                  ].vStack(alignment: MainAxisAlignment.start).p(10),
                ).w(context.screenWidth * (isMobile ? 0.8 : 0.6)).centered(),
                Card(
                  elevation: 10,
                  color: ColorsX.gray.withOpacity(0.7),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: [
                    "mapbox_search"
                        .richText
                        .color(ColorsX.red)
                        .semiBold
                        .size(TextSize.instance.size7)
                        .make()
                        .pOnly(bottom: 5),
                    "A Flutter package for making api calls for location search, written purely in dart.\nThis package can generate static images of any location.\nThis package can be found on pub.dev"
                        .richText
                        .maxLines(4)
                        .size(TextSize.instance.size5)
                        .color(ColorsX.white)
                        .make()
                        .pOnly(left: 5),
                    [
                      Image.asset(Images.gitHubDart)
                          .box
                          .size(40, 40)
                          .make()
                          .tooltip("Flutter package")
                          .click(
                            () {
                              launch(
                                  'https://github.com/ketanchoyal/mapbox_search');
                            },
                          )
                          .make()
                          .p2()
                          .moveUpOnHover
                          .showCursorOnHover,
                    ]
                        .hStack(
                          alignment: MainAxisAlignment.end,
                          crossAlignment: CrossAxisAlignment.end,
                        )
                        .pOnly(top: 10, left: 10),
                  ].vStack(alignment: MainAxisAlignment.start).p(10),
                ).w(context.screenWidth * (isMobile ? 0.8 : 0.6)).centered(),
                Card(
                  elevation: 10,
                  color: ColorsX.gray.withOpacity(0.7),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: "More"
                      .richText
                      .color(ColorsX.red)
                      .semiBold
                      .size(TextSize.instance.size7)
                      .make()
                      .p12()
                      .centered(),
                )
                    .w(context.screenWidth * (isMobile ? 0.8 : 0.6))
                    .centered()
                    .showCursorOnHover
                    .click(() {
                  launch('https://github.com/ketanchoyal?tab=repositories');
                }).make(),
              ]
                  .vStack(alignment: MainAxisAlignment.spaceEvenly)
                  .scrollVertical()
                  .p(20),
            ),
          ),
        ],
      ),
    );
  }
}
