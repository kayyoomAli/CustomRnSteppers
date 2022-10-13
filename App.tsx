import React from 'react';
import TimeLine from './steppers';
import {SafeAreaView, Text, View} from 'react-native';
export default function App() {
  const data = [
    {
      title: 'Order Confirmed',
      SubTitle: 'seller confirmed orderfbvdhjbhjbdhcjfsvbhjbhbhjidlsfvb xbdscfvn,jbxjkfnjkjdeklcbvjfkbdcvjklfsdfjklcv jkfldscsvnklbdacjknb vfsdabnkcv cbfnskdbnk vfsdbn.kcfvvcbknfszbknvfsdbnkvbknbnkdcfbhvdjkfscfjknfsdjkcnsfvjkn',
      date: 'Sun ,7th Aug 22',
      status: true,
      key: 1,
    },
    {
      title: 'Shipped ',
      SubTitle: 'seller confirmed order ',
      date: 'Your item has been Shipped',
      status: true,
      key: 2,
    },
    {
      title: 'Delivered',
      SubTitle: 'seller c222onfirmed order hrvfbdjc vdsfbjnkfcvdbfshkaslfvbhdfslfhjbjjgjidbvjlkehrfvbhfjdkfvjbhfdsklfvbhfdsljvbhcfdslvbcfdselnvbvldfsjbcvgdfnsl;dvjxbnfgdsjvfdslvxcjbfdsl;fjdgsl;kfjndsl;vbkjfdgls;vkbjfcdsre;fdhfgkjvkld;jhfbdksl;efkjghfskljhbvfdjskhgfdefkhvfdfhdvbsgufgvdjbsgvgcfgytudghfyucghvxdsugdsufgfdsuiafhjgdjsugdusfvgdyhuifsgvyfshuifyhsiysfyhguifhfskjvdsv kjbcgfdlshjbhjrsfsvdcuiljhuferishvdujhfdujshucbhzfvhuerabsdhkcuxzbvjlhidfbcvjihbdfhjbvhjibfvhjiefdaujcvfhjdfhidfhdfijbhfvdjilbdfvijlfdvfhijo',
      date: 'Tue ,9th Aug 22',
      status: true,
      key: 3,
    },
    {
      title: 'Return Cancelled',
      SubTitle: 'seller confirmed order ',
      date: 'Wed ,10 Aug 22',
      status: true,
      key: 4,
    },
    {
      title: 'Shipped ',
      SubTitle: 'seller confirmed order',
      date: 'Your item has been Shipped',
      status: false,
      key: 5,
    },
  ];
  var count = 1;
  data.map(item => {
    if (item.status === false) {
      count++;
    }
  });
  return (
    <SafeAreaView style={{marginVertical: 80, marginHorizontal: 30}}>
      {data.map((item, index) => (
        <TimeLine
          item={item}
          key={index}
          index={index}
          count={count}
          SizeOfcircle={20}
          length={data.length}
          status={item?.status}
          renderItem={(item: any) => {
            return (
              <View>
                <Text
                  style={{
                    fontWeight: item.status ? 'bold' : '500',
                  }}>
                  {item.title}
                </Text>
                <Text>{item.SubTitle}</Text>
                <Text>{item.date}</Text>
              </View>
            );
          }}
        />
      ))}
    </SafeAreaView>
  );
}

