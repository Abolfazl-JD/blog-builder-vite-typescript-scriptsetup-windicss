<template>
  <form @submit.prevent="submit">
    <input
      v-model="form.fields.email.value"
      type="email"
      placeholder="Enter your email address"
    />

    <!-- Display error message -->
    <p>{{ form.fields.email.errors.required }}</p>
    <p>{{ form.fields.email.errors.email }}</p>
    <!-- OR -->
    <p>
      {{ getFieldErrors(form.fields.email).join(", ") }}
    </p>

    <input
      v-model="form.fields.password.value"
      type="password"
      placeholder="Enter your password"
    />

    <!-- Display error message -->
    <p>{{ form.fields.password.errors.required }}</p>
    <p>{{ form.fields.password.errors.stringMin }}</p>
    <!-- OR -->
    <p>
      {{ getFieldErrors(form.fields.password, "stringMax") }}
    </p>
    <!-- OR -->
    <p>
      {{ getFieldErrors(form.fields.password).join(", ") }}
    </p>

    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
  getFieldErrors,
  getRawFormData,
  useForm,
  validateForm,
} from "vue3-form"

export default defineComponent({
  setup() {
    const form = useForm({
      email: { rules: ["required", "email"] },
      password: {
        rules: [
          "required",
          "stringMin:8",
          "stringMax:32",
          "alphabetsLowercase",
          "alphabetsUppercase",
          "numbers",
          "specialCharacters",
          "noSequence",
        ],
      },
    })

    const submit = () => {
      if (!validateForm(form)) {
        // Form is invalid
        return
      }

      // Form is valid...
      // proceed with submission.
      const fields = getRawFormData(form)
    }

    return { form, getFieldErrors, submit }
  },
})
</script>
