'use strict';

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 ����������� � �� 1 , � ����� ����������� c � a. a = 2
d = b++; alert(d);           // 1 ������ ������������ b � c, � ����� ����������� b �� 1. b = 2
c = (2 + ++a); alert(c);      // 5 � = (2 + (2 + 1)) ����� �������� a = 3
d = (2 + b++); alert(d);      // 4 d = (2 + 2), ����� �������� ���������� � b �������. b = 3
alert(a);                    // 3 ������� ����.
alert(b);                    // 3 ������� ����.