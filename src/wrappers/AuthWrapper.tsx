import React from "react";
import { PropsWithChildren } from "react";
import { AuthProvider, TAuthConfig } from "react-oauth2-code-pkce";

const authConfig: TAuthConfig = {
  clientId: import.meta.env.VITE_CLIENT_ID ?? 'Add your client id to the .env file',
  authorizationEndpoint: 'https://discord.com/api/oauth2/authorize',
  tokenEndpoint: 'https://discord.com/api/oauth2/token',
  redirectUri: import.meta.env.VITE_REDIRECT_URI ?? 'Add your redirect uri to the .env file',
  scope: 'identify guilds guilds.members.read',
  extraTokenParameters: {
    client_secret: import.meta.env.VITE_CLIENT_SECRET ?? 'Add your client secret to the .env file'
  },
  decodeToken: false
}

export const AuthWrapper: React.FC<PropsWithChildren> = ({children}) => {

  return (
      <AuthProvider authConfig={authConfig}>
        {children}
      </AuthProvider>
    )
}