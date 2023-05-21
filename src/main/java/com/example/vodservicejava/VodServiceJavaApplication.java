package com.example.vodservicejava;

import org.apache.coyote.http11.AbstractHttp11Protocol;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatConnectorCustomizer;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VodServiceJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(VodServiceJavaApplication.class, args);
    }

    /**
     * 아래의 설정은 Tomcat에서 multipart 요청의 최대 크기를 제한하는 'maxSwallowSize' 속성을 무제한(-1)으로 설정합니다.
     * 이렇게 하면 업로드 파일의 크기가 아무리 커도 Tomcat에서 거부하지 않게 됩니다.
     * 하지만 너무 큰 파일을 업로드하면 서버의 성능이 저하될 수 있으므로, 합리적인 제한을 설정하는 것이 중요합니다.
     * @return
     */
    @Bean
    public TomcatServletWebServerFactory tomcatEmbedded() {
        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        tomcat.addConnectorCustomizers((TomcatConnectorCustomizer) connector -> {
            if ((connector.getProtocolHandler() instanceof AbstractHttp11Protocol<?>)) {
                //-1 means unlimited
                ((AbstractHttp11Protocol<?>) connector.getProtocolHandler()).setMaxSwallowSize(-1);
            }
        });
        return tomcat;
    }

}
