FROM postgres:13.1-alpine AS dev
ENV POSTGRES_PASSWORD="secret" \
    POSTGRES_USER="developer" \
    POSTGRES_DB="relink_development"
EXPOSE 5432


FROM postgres:13.1-alpine AS test
ENV POSTGRES_PASSWORD="secret" \
    POSTGRES_USER="tester" \
    POSTGRES_DB="relink_test"
EXPOSE 5432
