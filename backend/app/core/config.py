from pydantic_settings import BaseSettings
from functools import lru_cache
from typing import List


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    APP_NAME: str = "TICMI - Teach Me"
    APP_VERSION: str = "0.2.0"
    DEBUG: bool = True

    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # Database
    DATABASE_URL: str = "sqlite:///./ticmi.db"
    SUPABASE_URL: str = ""
    SUPABASE_ANON_KEY: str = ""

    # LLM routing
    DEFAULT_LLM_PROVIDER: str = "mock"  # mock | openrouter
    DEFAULT_LLM_MODEL: str = "openrouter/free"
    OPENROUTER_API_KEY: str = ""
    OPENROUTER_BASE_URL: str = "https://openrouter.ai/api/v1"

    # Optional NVIDIA hosted endpoint as fallback
    NVIDIA_API_KEY: str = ""
    NVIDIA_BASE_URL: str = "https://integrate.api.nvidia.com/v1"
    NVIDIA_MODEL: str = "nvidia/llama-3.1-nemotron-70b-instruct"

    CHROMA_DB_HOST: str = "localhost"
    CHROMA_DB_PORT: int = 8001

    CORS_ORIGINS: str = "http://localhost:3000"

    @property
    def cors_origins_list(self) -> List[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
