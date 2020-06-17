import 'package:flutter/material.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:flutterPortfolio/extensions/hoverExtension.dart';

class MobileMockup extends StatelessWidget {
  const MobileMockup({
    Key key,
    @required this.easterEggVisibility,
    @required GlobalKey<State<StatefulWidget>> mobileHomeButtonKey,
  }) : _mobileHomeButtonKey = mobileHomeButtonKey, super(key: key);

  final bool easterEggVisibility;
  final GlobalKey<State<StatefulWidget>> _mobileHomeButtonKey;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 10,
      right: 10,
      child: VxBox(
        // color: Colors.white,
        // color: ColorsX.mobileMainColor,
        child: Column(
          children: [
            [
              VxBox()
                  .height(20)
                  .width(20)
                  .withRounded(value: 10)
                  .neumorphic(
                    color: ColorsX.mobileMainColor,
                    curve: VxCurve.concave,
                    elevation: 5,
                  )
                  .make()
                  .pOnly(top: 20, left: 20, right: 10),
              VxBox()
                  .height(20)
                  .width(100)
                  .withRounded(value: 10)
                  .neumorphic(
                    color: ColorsX.mobileMainColor,
                    curve: VxCurve.concave,
                    elevation: 5,
                  )
                  .make()
                  .pOnly(top: 20, right: 20)
            ].hStack().objectTopCenter(),
            Expanded(
                // flex: 6,
                child: VxBox(
              child:
                  "You Have found an easter egg 💙"
                      .text
                      .semiBold
                      .color(ColorsX.whiteWithOpacity)
                      .size(TextSize.instance.size6)
                      .center
                      .make()
                      .hide(isVisible: easterEggVisibility)
                      .centered(),
            )
                    .withRounded(value: 20)
                    .neumorphic(
                      color: ColorsX.mobileMainColor,
                      curve: VxCurve.emboss,
                      elevation: 10,
                    )
                    .make()
                    .pOnly(
                        top: 15,
                        left: 20,
                        right: 20,
                        bottom: 10)),
            VxBox()
                .height(50)
                .width(50)
                .withRounded(value: 50)
                .neumorphic(
                  color: ColorsX.mobileMainColor,
                  curve: VxCurve.concave,
                  elevation: 5,
                )
                .make(key: _mobileHomeButtonKey)
                .pOnly(left: 20, right: 20, bottom: 10)
                .objectBottomCenter()
                .showCursorOnHover
          ],
        ),
      )
          .height(550)
          .width(280)
          .withRounded(value: 20)
          .neumorphic(
            color: ColorsX.mobileMainColor,
            curve: VxCurve.emboss,
            elevation: 10,
          )
          .make(),
    );
  }
}

