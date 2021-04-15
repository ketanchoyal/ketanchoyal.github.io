//Singleton class
import 'dart:math';

class TextSize {
  static TextSize instance = TextSize(baseSize: 16);

  double? _baseSize;
  TextSize({double? baseSize}) {
    this._baseSize = baseSize;
  }

  double _multipleRatio = 8 / 9;

  ///Base Size
  double? get size4 => _baseSize;

  double get size3 => _baseSize! * _multipleRatio;
  double get size2 => _baseSize! * pow(_multipleRatio, 2);
  double get size1 => _baseSize! * pow(_multipleRatio, 3);
  double get size5 => _baseSize! / _multipleRatio;
  double get size6 => _baseSize! / pow(_multipleRatio, 2);
  double get size7 => _baseSize! / pow(_multipleRatio, 3);
  double get size8 => _baseSize! / pow(_multipleRatio, 4);
}
