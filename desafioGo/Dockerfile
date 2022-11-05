FROM golang:alpine AS build

RUN mkdir /var/go   

WORKDIR /var/go

COPY main /var/go

FROM scratch

WORKDIR /var/go

COPY --from=build /var/go /var/go

ENTRYPOINT [ "./main" ]