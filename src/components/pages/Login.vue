<template>
  <div class="login">
    <amplify-authenticator username-alias="email">
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      ></amplify-sign-up>
      <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'Login',
  data: () => ({
    user: undefined,
    authState: undefined,
    formFields: [
      {
        type: 'email',
        label: 'Custom email Label',
        placeholder: 'custom email placeholder',
        required: true,
      },
      {
        type: 'password',
        label: 'Custom Password Label',
        placeholder: 'custom password placeholder',
        required: true,
      },
    ],
  }),
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  beforeDestroy() {
    return onAuthUIStateChange
  },
}
</script>
