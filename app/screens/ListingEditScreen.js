import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppFormField, AppForm, AppFormPicker,SubmitButton } from '../components/forms';
import * as Yup from "yup";
import Screen from './Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    {label: "furniture",value:1},
    {label: "clothing",value:2},
    {label: "cameras",value:3},
  ];

export default function ListingEditScreen() {
    return (
        <Screen style = {styles.screen}>
            <AppForm
              initialValues = {{
                      title: "",
                      price:"",
                      description :"",
                      category: null,

                  }}
               onSubmit = {(values) => console.log(values)}
               validationSchema = {validationSchema}
            >
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
