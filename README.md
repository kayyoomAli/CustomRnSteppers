
# Project Title

A simple and fully customizable React Native component to create Animated Steppers.


## Table of content  
* Installation.  
* Usage.  
* Props
## Installation

## Screenshots 

<img src="https://user-images.githubusercontent.com/103027059/193255074-d9eda348-09c4-4b71-bb11-d806dab42e63.png" height="400" width="200"/> <img src="https://user-images.githubusercontent.com/103027059/193255293-a3436aec-46c6-49e8-85c2-428f50f8c060.png" height="400" width="200"/>

  index: any;
  item?: any;
  length: any;
  countOfStatus: number;
  status: boolean;
  widthOfline?: number;
  SizeOfcircle?: number;
  AnimatedColor?: string;
  backgroundColor?: string;
  renderItem: ({item}: timeLineProps) => React.ReactNode;

## Props
| Props | Type | Description |  
| --------- | ------- | ------ |
|index| any | (Required) index of data |
| item | any | item(data) that are rendered parllel to points|
| countOfStatus | number | (Required) number of status in data are true|
| widthofline | number| width if line in RNsteppers|
| animatedValue | number| animated value from where to start |
| AnimatedColor | string| AnimatedColor take string type of color ('green')|
| backgroundColor | string| backgroundColor take string type of color ('lightgrey') |
| SizeOfcircle | number |  sizeOfCirle take |
| status | boolean | (Required) it's declare at data which you declare at data|
| renderItem | Function | (Required) renderItem to show parellel data to animated Steppers|
| length | any | (Required) length of data |

## Important Note

data for RNsteppers must have status and key
* key must be unique
* status must be boolean in sequence { means if status start from true ,true... then false ,"if it's any status is false then all next status must be false }
