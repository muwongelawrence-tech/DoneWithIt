import React  from 'react';
import { StyleSheet } from 'react-native';

import { AppFormField, AppForm, AppFormPicker,SubmitButton } from '../components/forms';
import * as Yup from "yup";
import Screen from './Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1,"Please select atleast one Image")
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

export default function ListingEditScreen() {
  const location = useLocation();
    return (
        <Screen style = {styles.screen}>
            <AppForm
              initialValues = {{
                      title: "",
                      price:"",
                      description :"",
                      category: null,
                      images: []

                  }}
               onSubmit = {(values) => console.log(location)}
               validationSchema = {validationSchema}
            >
              <FormImagePicker name = "images"/>

                <AppFormField
                 maxLength = {255}
                 name = "title"
                 placeholder = "Title"
                />

               <AppFormField
                 maxLength = {8}
                 name = "price"
                 placeholder = "Price"
                 keyboardType = "numeric"
                />

                <AppFormPicker
                  items = {categories}
                  name = "category"
                  placeholder = "Category"
                  numberOfColumns = {3}
                  PickerItemComponent = { CategoryPickerItem }
                />

                <AppFormField
                 maxLength = {255}
                 multline
                 name = "description"
                 placeholder = "Description"
                 numberOfLines = {3}
                />

                 <SubmitButton title = "Post"/> 

            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:5
    }
});
