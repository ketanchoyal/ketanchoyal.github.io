import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutterPortfolio/resources/resources.dart';
import 'package:velocity_x/velocity_x.dart';

class Experience extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return [
      AutoSizeText.rich(
        TextSpan(
          children: [
            '_Experience'
                .textSpan
                .semiBold
                .color(ColorsX.white)
                // .size(TextSize.instance.size5)
                .make(),
          ],
        ),
        style: TextStyle(fontSize: TextSize.instance.size8),
      ),
      VxBox().color(ColorsX.red).height(3).width(60).make().pSymmetric(v: 5),
      VxBox().height(10).make(),
      [
        [
          "Recipe Unlimited"
              .text
              .color(ColorsX.whiteWithOpacity)
              .semiBold
              .size(TextSize.instance.size5)
              .make()
              .pOnly(right: 15),
          "Flutter Developer"
              .text
              .color(ColorsX.whiteWithOpacity)
              .hairLine
              .size(TextSize.instance.size3)
              .make()
              .pOnly(right: 15),
        ].column(
          axisSize: MainAxisSize.min,
          crossAlignment: CrossAxisAlignment.start,
        ),
        "Feb 2022 to Present"
            .text
            .color(ColorsX.whiteWithOpacity)
            .semiBold
            .size(TextSize.instance.size2)
            .make()
            .pOnly(right: 15),
      ].row(
        axisSize: MainAxisSize.max,
        crossAlignment: CrossAxisAlignment.start,
        alignment: MainAxisAlignment.spaceBetween,
      ),
      VxBox().height(10).make(),
      [
        [
          "Datomar Labs"
              .text
              .color(ColorsX.whiteWithOpacity)
              .semiBold
              .size(TextSize.instance.size5)
              .make()
              .pOnly(right: 15),
          "Flutter Developer"
              .text
              .color(ColorsX.whiteWithOpacity)
              .hairLine
              .size(TextSize.instance.size3)
              .make()
              .pOnly(right: 15),
        ].column(
          axisSize: MainAxisSize.min,
          crossAlignment: CrossAxisAlignment.start,
        ),
        "May 2021 to Feb 2022"
            .text
            .color(ColorsX.whiteWithOpacity)
            .semiBold
            .size(TextSize.instance.size2)
            .make()
            .pOnly(right: 15),
      ].row(
        axisSize: MainAxisSize.max,
        crossAlignment: CrossAxisAlignment.start,
        alignment: MainAxisAlignment.spaceBetween,
      ),
      VxBox().height(10).make(),
      [
        [
          "LISN"
              .text
              .color(ColorsX.whiteWithOpacity)
              .semiBold
              .size(TextSize.instance.size5)
              .make()
              .pOnly(right: 15),
          "Flutter Developer"
              .text
              .color(ColorsX.whiteWithOpacity)
              .hairLine
              .size(TextSize.instance.size3)
              .make()
              .pOnly(right: 15),
        ].column(
          axisSize: MainAxisSize.min,
          crossAlignment: CrossAxisAlignment.start,
        ),
        "Mar 2021 to Present"
            .text
            .color(ColorsX.whiteWithOpacity)
            .semiBold
            .size(TextSize.instance.size2)
            .make()
            .pOnly(right: 15),
      ].row(
        axisSize: MainAxisSize.max,
        crossAlignment: CrossAxisAlignment.start,
        alignment: MainAxisAlignment.spaceBetween,
      ),
      VxBox().height(10).make(),
      [
        [
          "Freelance Developer"
              .text
              .color(ColorsX.whiteWithOpacity)
              .semiBold
              .size(TextSize.instance.size5)
              .make()
              .pOnly(right: 15),
          " "
              .text
              .color(ColorsX.whiteWithOpacity)
              .hairLine
              .size(TextSize.instance.size3)
              .make()
              .pOnly(right: 15),
        ].column(
          axisSize: MainAxisSize.min,
          crossAlignment: CrossAxisAlignment.start,
        ),
        "2020 to Present"
            .text
            .color(ColorsX.whiteWithOpacity)
            .semiBold
            .size(TextSize.instance.size2)
            .make()
            .pOnly(right: 15),
      ].row(
        axisSize: MainAxisSize.max,
        crossAlignment: CrossAxisAlignment.start,
        alignment: MainAxisAlignment.spaceBetween,
      ),
      VxBox().height(10).make(),
      [
        [
          "Mits Infotech"
              .text
              .color(ColorsX.whiteWithOpacity)
              .semiBold
              .size(TextSize.instance.size5)
              .make()
              .pOnly(right: 15),
          "Flutter Developer"
              .text
              .color(ColorsX.whiteWithOpacity)
              .hairLine
              .size(TextSize.instance.size3)
              .make()
              .pOnly(right: 15),
        ].column(
          axisSize: MainAxisSize.min,
          crossAlignment: CrossAxisAlignment.start,
        ),
        "Jan 2019 to Nov 2019"
            .text
            .color(ColorsX.whiteWithOpacity)
            .semiBold
            .size(TextSize.instance.size2)
            .make()
            .pOnly(right: 15),
      ].row(
        axisSize: MainAxisSize.max,
        crossAlignment: CrossAxisAlignment.start,
        alignment: MainAxisAlignment.spaceBetween,
      ),
      VxBox().height(10).make(),
    ].vStack(
      alignment: MainAxisAlignment.spaceEvenly,
      crossAlignment: CrossAxisAlignment.start,
    );
  }
}
