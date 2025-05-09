import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS, FONTS, SPACING, SHADOWS } from '@/constants/theme';
import { Package, ArrowRight } from 'lucide-react-native';

interface OrderProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderProps {
  id: string;
  date: string;
  status: string;
  total: number;
  products: OrderProduct[];
}

interface OrderCardProps {
  order: OrderProps;
}

export default function OrderCard({ order }: OrderCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return COLORS.info;
      case 'shipped':
        return COLORS.warning;
      case 'delivered':
        return COLORS.success;
      default:
        return COLORS.textSecondary;
    }
  };
  
  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };
  
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.orderId}>Order #{order.id}</Text>
          <Text style={styles.date}>{order.date}</Text>
        </View>
        <View style={[
          styles.statusContainer, 
          { backgroundColor: `${getStatusColor(order.status)}20` }
        ]}>
          <Text style={[
            styles.status, 
            { color: getStatusColor(order.status) }
          ]}>
            {formatStatus(order.status)}
          </Text>
        </View>
      </View>
      
      <View style={styles.productsContainer}>
        {order.products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                ${product.price.toFixed(2)} × {product.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>${order.total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track Order</Text>
          <ArrowRight size={16} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.medium,
    padding: SPACING.medium,
    ...SHADOWS.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.medium,
  },
  orderId: {
    ...FONTS.body2,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  date: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  statusContainer: {
    paddingVertical: SPACING.tiny,
    paddingHorizontal: SPACING.small,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  status: {
    ...FONTS.caption,
    fontWeight: '600',
  },
  productsContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.small,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.small,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: SPACING.small,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    ...FONTS.body3,
    color: COLORS.textPrimary,
  },
  productPrice: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.medium,
  },
  totalLabel: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
  },
  totalPrice: {
    ...FONTS.h3,
    color: COLORS.textPrimary,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    paddingVertical: SPACING.small,
    paddingHorizontal: SPACING.medium,
    borderRadius: 8,
  },
  buttonText: {
    ...FONTS.button,
    color: COLORS.primary,
    marginRight: SPACING.tiny,
  },
});