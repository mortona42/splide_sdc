<?php

declare(strict_types=1);

namespace Drupal\splide_sdc\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a splide sdc demo block.
 *
 * @Block(
 *   id = "splide_sdc_demo",
 *   admin_label = @Translation("Splide SDC Demo"),
 *   category = @Translation("Custom"),
 * )
 */
final class SplideSdcDemoBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $build['content'] = [
      '#type' => 'component',
      '#component' => 'splide_sdc:splide_sdc_demo',
      '#props' => [],
      '#slots' => []
    ];
    return $build;
  }

}
