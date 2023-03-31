import 'dart:ui';
import 'package:flutterPortfolio/pages/Homepage.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:responsive_framework/responsive_framework.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      builder: (context, widget) => ResponsiveWrapper.builder(
        ClampingScrollWrapper.builder(context, widget!),
        maxWidth: 1400,
        minWidth: 500,
        defaultScale: true,
        breakpoints: [
          ResponsiveBreakpoint.resize(
            500,
            name: MOBILE,
          ),
          ResponsiveBreakpoint.resize(
            600,
            name: MOBILE,
          ),
          ResponsiveBreakpoint.resize(
            850,
            name: TABLET,
          ),
          // ResponsiveBreakpoint.autoScaleDown(
          //   1000,
          //   name: TABLET,
          // ),
          ResponsiveBreakpoint.resize(
            1200,
            name: DESKTOP,
          ),
          ResponsiveBreakpoint.autoScale(
            2460,
            name: "4K",
          ),
        ],
        background: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
              colorFilter: ColorFilter.mode(
                Colors.black,
                BlendMode.saturation,
              ),
              fit: BoxFit.cover,
              image: AssetImage(
                Images.background,
              ),
            ),
          ),
          child: Stack(
            children: [
              BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 1.0, sigmaY: 1.0),
                child: Column(
                  children: [
                    Flexible(
                      flex: 7,
                      child: Container(
                        color: ColorsX.whiteWithOpacity,
                      ),
                    ),
                    Flexible(
                      flex: 3,
                      child: Container(
                        color: ColorsX.blackWithOpacity,
                      ),
                    ),
                  ],
                ),
              ),
              Positioned(
                bottom: 120,
                left: -90,
                child: "Made with 💙 for #Flutter"
                    .text
                    .semiBold
                    .textStyle(TextStyle(
                      decoration: TextDecoration.none,
                    ))
                    .color(ColorsX.white)
                    .size(TextSize.instance.size5)
                    .make()
                    .rotateN90(),
              ),
            ],
          ),
        ),
      ),
      home: Homepage(),
      theme: Theme.of(context).copyWith(
        textTheme: GoogleFonts.latoTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      debugShowCheckedModeBanner: false,
      title: "Ketan Choyal",
    );
  }
}
