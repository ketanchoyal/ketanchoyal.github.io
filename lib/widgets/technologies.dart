import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:flutterPortfolio/widgets/flipWidget.dart';
import 'package:velocity_x/velocity_x.dart';

class TechnologiesWidget extends StatefulWidget {
  TechnologiesWidget({Key? key}) : super(key: key);

  @override
  State<TechnologiesWidget> createState() => _TechnologiesWidgetState();
}

class _TechnologiesWidgetState extends State<TechnologiesWidget> {
  double flutterElevation = 5;
  double githubElevation = 5;
  double swiftElevation = 5;
  double firebaseElevation = 5;
  double adobeXDElevation = 5;
  double androidElevation = 5;
  double typescriptElevation = 5;
  double awsElevation = 5;
  double nodejsElevation = 5;
  double serverlessElevation = 5;
  @override
  Widget build(BuildContext context) {
    return Wrap(
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
              color: ColorsX.whiteWithOpacity.withOpacity(0.6),
              shadowColor: ColorsX.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20)),
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
                  borderRadius: BorderRadius.circular(20)),
              elevation: flutterElevation,
              shadowColor: ColorsX.white,
              color: ColorsX.whiteWithOpacity.withOpacity(0.4),
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
          child: _flipWidget(githubElevation, 'Github', Images.githubLogo),
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
          child: _flipWidget(firebaseElevation, 'Firebase', Images.firebase),
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
              color: ColorsX.whiteWithOpacity.withOpacity(0.6),
              shadowColor: ColorsX.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20)),
              elevation: adobeXDElevation,
              child: AutoSizeText.rich(
                TextSpan(
                  children: [
                    'Adobe'
                        .textSpan
                        .semiBold
                        .color(ColorsX.blackWithOpacity)
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
                        .color(ColorsX.blackWithOpacity)
                        // .size(TextSize.instance.size5)
                        .make(),
                  ],
                ),
                style: TextStyle(fontSize: TextSize.instance.size7),
              ).centered(),
            ),
            backWidget: Card(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20)),
              elevation: adobeXDElevation,
              shadowColor: ColorsX.white,
              color: ColorsX.whiteWithOpacity.withOpacity(0.4),
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
          child: _flipWidget(androidElevation, 'Android', Images.android),
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
          child: _flipWidget(swiftElevation, 'Swift', Images.swift),
        ).p(20),
        MouseRegion(
          onHover: (enter) {
            setState(() {
              typescriptElevation = 25;
            });
          },
          onExit: (exit) {
            setState(() {
              typescriptElevation = 5;
            });
          },
          child:
              _flipWidget(typescriptElevation, 'TypeScript', Images.typescript),
        ).p(20),
        MouseRegion(
          onHover: (enter) {
            setState(() {
              awsElevation = 25;
            });
          },
          onExit: (exit) {
            setState(() {
              awsElevation = 5;
            });
          },
          child: _flipWidget(awsElevation, 'AWS', Images.aws),
        ).p(20),
        MouseRegion(
          onHover: (enter) {
            setState(() {
              serverlessElevation = 25;
            });
          },
          onExit: (exit) {
            setState(() {
              serverlessElevation = 5;
            });
          },
          child:
              _flipWidget(serverlessElevation, 'Serverless', Images.serverless),
        ).p(20),
        MouseRegion(
          onHover: (enter) {
            setState(() {
              nodejsElevation = 25;
            });
          },
          onExit: (exit) {
            setState(() {
              nodejsElevation = 5;
            });
          },
          child: _flipWidget(nodejsElevation, 'NodeJS', Images.nodejs),
        ).p(20),
        VxBox().height(60).make()
      ],
    );
  }

  FlipWidget _flipWidget(double elevation, String text, String image) {
    return FlipWidget(
      height: 120,
      width: 120,
      frontWidget: Card(
        color: ColorsX.whiteWithOpacity.withOpacity(0.6),
        shadowColor: ColorsX.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        elevation: elevation,
        child: text.richText.semiBold
            .color(ColorsX.blackWithOpacity)
            .size(TextSize.instance.size7)
            .make()
            .centered(),
      ),
      backWidget: Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        elevation: elevation,
        shadowColor: ColorsX.white,
        color: ColorsX.whiteWithOpacity.withOpacity(0.4),
        child: Image.asset(
          image,
        ).p20(),
      ),
    );
  }
}
