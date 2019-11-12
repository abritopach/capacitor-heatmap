
  Pod::Spec.new do |s|
    s.name = 'CapacitorHeatmap'
    s.version = '0.0.1'
    s.summary = 'Heatmap'
    s.license = 'MIT'
    s.homepage = 'https://github.com/abritopach/capacitor-heatmap'
    s.author = 'Adrián Brito Pacheco'
    s.source = { :git => 'https://github.com/abritopach/capacitor-heatmap', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end