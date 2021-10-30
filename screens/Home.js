import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";
import { CategoryCard, TrendingCard } from "../components";
const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        {/*Text */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}
          >
            VESTEL HamsInCode🇹🇷,
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            Vestel telefonlarını gördünüzmü?
          </Text>
        </View>
        {/*Image */}
        <TouchableOpacity onPress={() => console.log("Profile")}>
          <Image
            source={images.profile}
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />

        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Ara"
        />
      </View>
    );
  }
  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}
      >
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.olur}
            style={{
              width: 80,
              height: 80,
              borderRadius: 10
            }}
          />
        </View>

        {/* Text */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}
        >
          <Text
            style={{
              width: "80%",
              ...FONTS.body4,
            }}
          >
            Vestel ev aletleri hakkında bilgi almak istermisiniz?
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
                ...FONTS.h4,
              }}
            >
              Tıklayınız...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Trendler
        </Text>
        <FlatList
          data={dummyData.telefonhakkinda}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(hamza) => `${hamza.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            );
          }}
        />
      </View>
    );
  }
  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}
      >
        {/* Section Type */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
          }}
        >
          Telefonlar
        </Text>
        {/* View All */}
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FlatList
        data={dummyData.a}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}

            {/* Search Bar */}
            {renderSearchBar()}

            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Category Header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
