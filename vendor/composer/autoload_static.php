<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2aabfd3e347d46c9392511e9b4fa9aa5
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'EmailKit\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'EmailKit\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2aabfd3e347d46c9392511e9b4fa9aa5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2aabfd3e347d46c9392511e9b4fa9aa5::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2aabfd3e347d46c9392511e9b4fa9aa5::$classMap;

        }, null, ClassLoader::class);
    }
}
