<script lang="ts" setup>
// import { getFieldErrors, getRawFormData, useForm, validateForm } from 'vue3-form'
import { useForm, validateForm, getRawFormData, getFieldError,validateField, getFormData , type RuleName, type Rule } from 'vue3-form'

const form = useForm({
  email : {
    rules : ['required', 'email'] as unknown as [RuleName | Rule]
  },
  password : {
    rules  : [
      'alphabets',
      'alphabetsUppercase',
      'numbers',
      'required',
      'stringMin:8',
      'stringMax:20',
      'specialCharacters'
    ]  as unknown as [RuleName | Rule]
  }
})

const confirmForm = () => {
  if(!validateForm(form)) console.log('sorry')
  console.log(validateField(form.value.fields.email , form))
  console.log(getRawFormData(form))
}
</script>

<template>
  <form @submit.prevent="confirmForm" class="max-w-1000px mx-auto mt-20 text-center">
    <input class="outline-none px-2 block mx-auto" type="email" v-model="form.fields.email.value" placeholder="Enter your email address" />
   
    <p v-for="error of getFieldError(form.fields.email)" :key="error">
      {{error}}
    </p>

    <br><br>
    <input class="outline-none px-2 block mx-auto" type="password" v-model="form.fields.password.value" placeholder="Enter your password" />
    <p v-for="error of getFieldError(form.fields.password)" :key="error">
      {{error}}
    </p>

    <button type="submit" class="mt-10 bg-rose-500 text-white px-4 py-1 rounded">
      Login
    </button>
  </form>
</template>
