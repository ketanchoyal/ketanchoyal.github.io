import 'package:flutter/material.dart';
import 'package:flutterPortfolio/pages/desktop_homepage.dart';
import 'package:flutterPortfolio/pages/mobile_homepage.dart';
import 'package:responsive_framework/responsive_framework.dart';
import 'package:velocity_x/velocity_x.dart';

class Homepage extends StatefulWidget {
  @override
  _HomepageState createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      backgroundColor: Colors.transparent,
      body: SingleChildScrollView(
        child: ResponsiveHomepage().centered(),
      ),
    );
  }
}

class ResponsiveHomepage extends StatelessWidget {
  const ResponsiveHomepage({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (ResponsiveWrapper.of(context).equals(MOBILE) ||
            ResponsiveWrapper.of(context).isSmallerThan(MOBILE)) {
          return MobileHomepage();
        } else if (ResponsiveWrapper.of(context).equals(TABLET)) {
          return DesktopHomepage();
        } else {
          return DesktopHomepage();
        }
      },
    );
  }
}
