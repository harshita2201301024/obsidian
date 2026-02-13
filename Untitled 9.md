CORS_ALLOW_ORIGIN='http://localhost:5173;http://localhost:8080;https://sandbox.dge.gov.ae'

GOVGPT_RAG_WOG_MODEL_NAME=gpt-4o

ENABLE_OAUTH_GROUP_MANAGEMENT=true  
ENABLE_OAUTH_GROUP_CREATION=true  
OAUTH_GROUPS_CLAIM=groups  
WEBUI_URL=[http://localhost:5173/](http://localhost:5173/ "http://localhost:5173/")  
AUTH_PROVIDER=oidc  
ENABLE_OAUTH_SIGNUP=true  
OAUTH_CLIENT_ID=DGE-sec-client  
OAUTH_CLIENT_SECRET=ni6ibKQjJkKzbnTb03TqMLWywYOojJvs  
OPENID_PROVIDER_URL=[https://govgpt.sandbox.dge.gov.ae/keycloak/realms/DGE/.well-known/openid-configuration](https://govgpt.sandbox.dge.gov.ae/keycloak/realms/DGE/.well-known/openid-configuration "https://govgpt.sandbox.dge.gov.ae/keycloak/realms/dge/.well-known/openid-configuration")  
OAUTH_PROVIDER_NAME=Keycloak  
OAUTH_ISSUER_URL=[https://govgpt.sandbox.dge.gov.ae/keyclock/realms/DGE](https://govgpt.sandbox.dge.gov.ae/keyclock/realms/DGE "https://govgpt.sandbox.dge.gov.ae/keyclock/realms/dge")  
OIDC_SCOPE=openid profile email  
OPENID_REDIRECT_URI=[http://localhost:8080/oauth/oidc/callback](http://localhost:8080/oauth/oidc/callback "http://localhost:8080/oauth/oidc/callback")  
OAUTH_MERGE_ACCOUNTS_BY_EMAIL=true  
AUTO_APPROVE_OAUTH_USERS=true  
DEFAULT_USER_ROLE=user  
ENABLE_GOVGPT_FILE_SEARCH=true  
GOVGPT_FILE_SEARCH_API_URL=[https://labs.sandbox.dge.gov.ae/byd/query](https://labs.sandbox.dge.gov.ae/byd/query "https://labs.sandbox.dge.gov.ae/byd/query")  
GOVGPT_FILE_SEARCH_TIMEOUT=30  
MOBILE_INPUT_LINES=5  
FILE_UPLOAD_COUNT_ALLOWED=5  
MAX_FILE_SIZE=5242880  
ALLOWED_FILE_TYPES=pdf  
PRIVACY_POLICY_URL=[http://localhost:5173/privacy](http://localhost:5173/privacy "http://localhost:5173/privacy")  
TERMS_CONDITIONS_URL=[http://localhost:5173/terms](http://localhost:5173/terms "http://localhost:5173/terms")  
ENABLE_WEB_SEARCH=true  
WEB_SEARCH_ENGINE=serper  
SERPER_API_KEY=59ac0165b239b15c5b2ae17f7898693a721215da  
GOV_GPT_WEB_SEARCH=true  
MAX_RETRIALS_WEB_SEARCH=3  
CUSTOM_WEB_SEARCH_URL=[https://labs.sandbox.dge.gov.ae/byd/search](https://labs.sandbox.dge.gov.ae/byd/search "https://labs.sandbox.dge.gov.ae/byd/search")  
WEBUI_AUTH_SIGNOUT_REDIRECT_URL=[https://govgpt.sandbox.dge.gov.ae](https://govgpt.sandbox.dge.gov.ae "https://govgpt.sandbox.dge.gov.ae/")  
JWT_EXPIRES_IN=72h  
MS_LOGOUT_URL=[https://login.microsoftonline.com/0cefd05a-5b38-4ce7-96bb-c31e6e251d18/oauth2/v2.0/logout](https://login.microsoftonline.com/0cefd05a-5b38-4ce7-96bb-c31e6e251d18/oauth2/v2.0/logout "https://login.microsoftonline.com/0cefd05a-5b38-4ce7-96bb-c31e6e251d18/oauth2/v2.0/logout")  
GOVGPT_API_KEY=gotgpt-sandbox

ADDITIONAL_FUNCTION_DOMAINS=github.com,raw.githubusercontent.com

# Redis Configuration for JWT Token Blacklisting  
REDIS_URL=redis://localhost:6379  
JWT_BLACKLIST_TTL_BUFFER=3600  
JWT_BLACKLIST_DEFAULT_TTL=86400

# Optional Redis Connection Options  
# REDIS_CONNECT_TIMEOUT=5  
# REDIS_SOCKET_TIMEOUT=5  
# REDIS_RETRY_ON_TIMEOUT=true

ENABLE_ADMIN_FUNCTIONALITY=true  
BYPASS_MODEL_ACCESS_CONTROL=false  
PUBLIC_UNIFY_APPS_HOST=[https://sandbox.dge.gov.ae](https://sandbox.dge.gov.ae "https://sandbox.dge.gov.ae/")  
PUBLIC_UNIFY_APPS_IDENTITY_PROVIDER_ID=68a603a7e3cb4a5ada950f1d  
DEFAULT_MODELS=gpt-4.1  
RAG_FILE_MAX_COUNT=5

AVAILABLE_MODELS='[{"id":"gpt-5", "code":"2923sdaedad232","name":"gpt-5","description":"Think longer for better responses.","description_ar":"فكّر ملياً للحصول على إجابات أفضل.","version":"RESPONSES","code":"gpt-5","default":false},{"id":"gpt-4.1", "code":"2923sdaedad231","name":"gpt-4.1","description":"For everyday use. Fast and accurate.","description_ar":"للاستخدام اليومي. سريع ودقيق.","version":"COMPLETIONS","code":"gpt-4.1","default":true}]'

VITE_AZURE_SPEECH_KEY=2v5B2H5SwbQ7yXWdV3x5bjfmY9kVR0NiEiDKbWGhVWJ2deo71scoJQQJ99BFACF24PCXJ3w3AAAAACOG8U6V  
VITE_AZURE_SPEECH_REGION=uaenorth  
VITE_SPEECH_BIAS_PHRASES=GPT|GOV|DGE|Ministry|Government  
VITE_WAKEWORD=Hey GovGPT|Hello Assistant|Hello GovGPT

ENABLE_DATABASE_LOGGING=false  
environment=sandbox