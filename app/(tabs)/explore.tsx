import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={
    //     <IconSymbol
    //       size={310}
    //       color="#808080"
    //       name="chevron.left.forwardslash.chevron.right"
    //       style={styles.headerImage}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Explore</ThemedText>
    //   </ThemedView>
    //   <ThemedText>This app includes example code to help you get started.</ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the web version, press{' '}
    //       <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
    //       different screen densities
    //     </ThemedText>
    //     <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Custom fonts">
    //     <ThemedText>
    //       Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
    //       <ThemedText style={{ fontFamily: 'SpaceMono' }}>
    //         custom fonts such as this one.
    //       </ThemedText>
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{' '}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
    //       what the user's current color scheme is, and so you can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{' '}
    //       <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
    //       the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
    //       library to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-10 pt-12 items-center`}>
          <Image source={require('../../assets/images/logosmk.webp')} style={tw`h-46 w-46 rounded-full border-slate-300 border`} />
          <Text style={tw`font-semibold text-2xl mt-2`}>SMK Pesat IT XPRO</Text>
          <Text style={tw`font-semibold text-slate-400 w-3/4 text-center mt-2`}>"Sekolah Umum berbasis agama pilihan siswa/i terbaik"</Text>
          <View style={tw`flex-row gap-5 mt-4`}>
            <Entypo style={tw`text-xl rounded-full bg-slate-200 p-2 px-3 text-red-500`} name='youtube' />
            <Entypo style={tw`text-xl rounded-full bg-slate-200 p-2 px-3 text-blue-500`} name='twitter' />
            <Entypo style={tw`text-xl rounded-full bg-slate-200 p-2 px-3 text-rose-500`} name='instagram' />
            <Entypo style={tw`text-xl rounded-full bg-slate-200 p-2 px-3 text-blue-600`} name='linkedin' />
          </View>
        </View>
        <View style={tw`px-6`}>
          <View style={tw`flex-row justify-around mt-8`}>
            <View style={tw``}>
              <Text style={tw` text-center font-black text-xl`}>111</Text>
              <Text style={tw` text-center text-slate-400 font-bold text-xl`}>RPL</Text>
            </View>
            <View style={tw``}>
              <Text style={tw`text-center font-black text-xl`}>120</Text>
              <Text style={tw`text-center text-slate-400 font-bold text-xl`}>DKV</Text>
            </View>
            <View style={tw``}>
              <Text style={tw`text-center font-black text-xl`}>151</Text>
              <Text style={tw`text-center text-slate-400 font-bold text-xl`}>TKJ</Text>
            </View>
          </View>
          <View style={tw`flex-row gap-2 mt-8 justify-center `}>
            <Link href="/explore/project" style={tw`border text-center rounded py-3 text-blue-700 font-semibold border-blue-700 w-1/2`}>
              <Text >Project</Text>
            </Link>
            <Link href="/explore/siswa" style={tw` text-center rounded py-3 bg-blue-700 text-white font-semibold w-1/2`}>
              <Text style={tw` text-center rounded py-3 bg-blue-700 text-white font-semibold`}>Siswa</Text>
            </Link>
          </View>

          <View style={tw`mt-8 flex-row gap-3 justify-center px-6`}>
            <Image source={require('../../assets/images/abm.webp')} style={tw`h-30 rounded-lg w-1/3`} />
            <Image source={require('../../assets/images/pdd.webp')} style={tw`h-30 rounded-lg w-1/3`} />
            <Image source={require('../../assets/images/An-Bullyinh.webp')} style={tw`h-30 rounded-lg w-1/3`} />
          </View>
          <View style={tw`mt-3 flex-row gap-3 justify-center px-6`}>
            <Image source={require('../../assets/images/openhouse.webp')} style={tw`h-30 rounded-lg w-1/3`} />
            <Image source={require('../../assets/images/openhouse.webp')} style={tw`h-30 rounded-lg w-1/3`} />
            <Image source={require('../../assets/images/openhouse.webp')} style={tw`h-30 rounded-lg w-1/3`} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  roundElement: {
    borderRadius: 100,
    backgroundColor: '#16404D',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

  },
  textWhite: {
    color: 'white',
  },
  textGrey: {
    color: 'grey',
    fontWeight: 600,
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 500,
  },
  profileLogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderColor: 'grey',
    borderStyle: 'solid',
  },
});
