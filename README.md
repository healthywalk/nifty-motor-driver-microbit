## nifty-motor-driver-microbit

> Open this page at [https://healthywalk.github.io/nifty-motor-driver-microbit/](https://healthywalk.github.io/nifty-motor-driver-microbit/)

## Summary
This extension supports the Motor drivers in __Microbit MakeCode__ programming.  
This extension can be used with many motor driver ICs, including Kitronik motor drivers, or their breakouts.

## Methods
* Initialization    (Always run at the beginning)
```
NiftyMotorDriver.initializeMotorDriver(MotorEnum.m1, DigitalPin.P8, DigitalPin.P12)
```
-- This initialization can be omitted when using the Kitronik motor driver board-5620 / 5698. Like the Kitronik Extension, pin numbers P8, P12, P0, and P16 are assigned as default values in this extension.  

* drive Motor
```
NiftyMotorDriver.driveMotor(MotorEnum.m1, 50)
```
-- signed speed: -100 .. 100  

* coast Motor
```
NiftyMotorDriver.coastMotor(MotorEnum.m1)
```

* brake Motor
```
NiftyMotorDriver.brakeMotor(MotorEnum.m1)
```


## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/healthywalk/nifty-motor-driver-microbit** を検索してインポートします。

## このプロジェクトを編集します ![ビルド ステータス バッジ](https://github.com/healthywalk/nifty-motor-driver-microbit/workflows/MakeCode/badge.svg)

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/healthywalk/nifty-motor-driver-microbit** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/healthywalk/nifty-motor-driver-microbit/raw/master/.github/makecode/blocks.png)

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
